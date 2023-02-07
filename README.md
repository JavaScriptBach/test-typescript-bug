# About
This is a repro for a TypeScript bug where it fails to infer the correct return type for Promise.all().

```
Property 'blob' does not exist on type 'Promise<Response>'.
```


# Steps
1. Checkout repo
2. npm ci
3. npm run build

