if (process.env.NODE_ENV === 'development') {
  process.env.NODE_ENV = 'test';
}

if (process.env.NODE_ENV !== 'test') {
  throw new Error("Warning! Environment is not 'test' and could destroy production data!");
}
