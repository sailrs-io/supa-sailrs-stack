export type LoaderData<T> = T extends (...args: any[]) => infer ReturnValue
  ? ReturnValue extends Promise<infer Response>
  ? Response extends { json: () => Promise<infer Json> }
  ? Awaited<Json>
  : never
  : never
  : never;
