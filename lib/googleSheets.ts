import { google } from "googleapis";

function getAuth() {
  // Support chi-bakery style single JSON key, OR split env vars
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  let email: string;
  let privateKey: string;

  if (serviceAccountKey) {
    // Single JSON blob (same as chi-bakery)
    const parsed = JSON.parse(serviceAccountKey);
    email = parsed.client_email;
    privateKey = parsed.private_key;
  } else {
    // Fallback to split env vars
    email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL || "";
    privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(
      /\\n/g,
      "\n"
    );
  }

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheets() {
  return google.sheets({ version: "v4", auth: getAuth() });
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;

export async function getSheetData(
  sheetName: string,
  range: string
): Promise<string[][]> {
  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!${range}`,
  });
  return (res.data.values as string[][]) || [];
}

export async function appendRows(
  sheetName: string,
  range: string,
  values: string[][]
) {
  const sheets = getSheets();
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!${range}`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

export async function updateRange(
  sheetName: string,
  range: string,
  values: string[][]
) {
  const sheets = getSheets();
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!${range}`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}
