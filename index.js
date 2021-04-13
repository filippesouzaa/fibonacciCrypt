function fibonacciCrypt() {
  const cryptCode =
    "AcoDQeYjrSlByFtyzQhvjoCNVpsaLeQPtGUjQHVzbgabJuAiMHDxwfkNvCwIGmZCTInlSiKvRKxAGzJsgmPeUBAReDzmLzqgJgrXobzfoWiwvRPdFgJzIkSoJscWtVdEbuIRYhXOdHkayBdFIMHSyzIJtmGMhJTiFBaDIzrngCngdSnngUHFWpQpCwElHxunYWsiXKvFOkntcAHiXopTgIKkeovoLrBlPTtMfqTTAgnejUPgKeBsolCtAAjNtKBjf";
  let letter = "";

  let i;
  const fib = [];
  const list = [];

  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= 11; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    letter = cryptCode.charAt(fib[i]);
    list.push(letter);
  }
  list.push("@aoop.com.br");
  list.splice(5, 0, ".");

  const emailFound = list.join("").toLocaleLowerCase();

  console.log(emailFound);
}

fibonacciCrypt();
