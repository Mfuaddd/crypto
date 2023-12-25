export async function getData({
  endpoint,
  base,
  date,
  start_date,
  end_date,
  type,
  from,
  to,
  amount,
  symbols,
  apiKey = "PpQEf64BXCxQbTnbHABDW1oSw3SWcXI3",
}) {
  const url = `https://api.currencybeacon.com/v1/${endpoint}?api_key=${apiKey}${
    base ? "&base=" + base : ""
  }${date ? "&date=" + date : ""}${
    start_date ? "&start_date=" + start_date : ""
  }${end_date ? "&end_date=" + end_date : ""}${type ? "&type=" + type : ""}${
    from ? "&from=" + from : ""
  }${to ? "&to=" + to : ""}${amount ? "&amount=" + amount : ""}${
    symbols ? "&symbols=" + symbols : ""
  }`;
  
  const res = await fetch(url);
  const data = await res.json();
  return data;
}