# Historical Facts API

## 📌 Description
This API returns a historical fact that occurred between 1920 and 2020, based on the year provided by the user.

## ✅ Requirements
- The user must enter a year between **1920 and 2020**.
- The API retrieves the historical fact corresponding to the provided year.
- If a fact is found, it is returned to be displayed on the front-end.
- If the user does **not** provide a year, enters a year **outside the allowed range**, or inputs an **invalid value** (e.g., letters instead of numbers), the system will indicate that no fact was found and return a **400 status code**.
- The system contains **one historical fact for each allowed year**, totaling **101 facts**.

## 🚀 How to Use
### Request Example:
```http
GET /api/facts?year=1950
```

### Response Example:
```json
{
  "year": 1950,
  "fact": "The Korean War began when North Korea invaded South Korea."
}
```

### Error Response Example:
```json
{
  "error": "Invalid year. Please provide a year between 1920 and 2020."
}
```