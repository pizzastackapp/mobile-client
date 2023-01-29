declare module 'use-dynamic-refs' {
  const useDynamicRefs: <T>() => ((key: string) => React.RefObject<T>)[];
  export default useDynamicRefs;
}

declare module '@env' {
  export const HASURA_URL: string;
  export const CLOUDINARY_CLOUD_NAME: string;
}
