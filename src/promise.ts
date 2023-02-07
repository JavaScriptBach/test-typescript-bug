export async function testPromiseAll(docs: string[]) {
  const requests = docs.map(async doc => fetch("/doc"));
  const responses = await Promise.all(requests);
  for (const res of responses) {
    await res.blob(); // Property 'blob' does not exist on type 'Promise<Response>'.
  }
}
