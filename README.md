<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Fixit - Repair Services</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to right, #e0f7fa, #ffffff);
      color: #333;
    }
    header {
      background-color: #0288d1;
      padding: 20px;
      text-align: center;
      color: white;
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .search-box {
      margin: 20px auto;
      text-align: center;
    }
    input[type="text"] {
      padding: 12px;
      width: 80%;
      max-width: 500px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 16px;
    }
    .categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 20px;
    }
    .category {
      background-color: #b3e5fc;
      margin: 10px;
      padding: 15px 25px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }
    .category:hover {
      background-color: #81d4fa;
    }
