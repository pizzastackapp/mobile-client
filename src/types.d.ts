declare module 'use-dynamic-refs' {
  const useDynamicRefs: <T>() => ((key: string) => React.RefObject<T>)[];
  export default useDynamicRefs;
}
