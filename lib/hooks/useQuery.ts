// 'use client'; 

// import qs from 'query-string'; 
// import { useRouter} from 'next/navigation'; 
// import { usePathname, useSearchParams } from 'next/navigation';


// export const useQuery = (): [
//     URLSearchParams, 
//     SetQuery, 
//     ClearQuery,  
//     GetQuery  
// ] => {
// const router = useRouter(); 
// let params = new URLSearchParams(qs.stringify(router)); 

// const getQuery: GetQuery = (q = {}) => {
//     let update = {}
//     if(params?.has('day')){
//         update = {...update, day: params?.get('day')}; 
//     }
//     if(params?.has('borough')){
//         update = {...update, day: params?.get('borough')}; 
//     }

//     return {...update, ...q};
// }
// const setQuery: SetQuery = (q, append = false) => {
//     if(!q){
//         return null; 
//     }

//     const currentParams = qs.parse(params.toString());
//     const update = {...currentParams, ...q};

//     params = new URLSearchParams(update);

//     return push({search: params.toString()}, undefined, {
//         shallow: true, 
//         scroll: true, 
//     }); 
// }; 

// const clearQuery: ClearQuery = (q) => {
//     const currentParams = qs. parse(params.toString());
//     if(!q || !currentParams){
//         return null; 
//     }
//     for (const key in q) {
//         delete currentParams[key]; 
//     }

//     params = new URLSearchParams(currentParams as Record<string, string>);
//     return router.push({search: params.toString()}, undefined, {
//         shallow:true, 
//         scroll: true, 
//     })
// }
// return [params, setQuery, clearQuery, getQuery]
// }

// export type Params = {
//     [index: string] : any; 
//     // Search query param - borough 
//     borough?: string; 
//     // Search query param - day 
//     day?: string; 
//     // Search query param - starttime 
//     startTime?: string; 
//     // Search query param - cost 
//     free?: string; 
//     // Current results page
//     page?: number; 
//     // Sort Filter
//     sort?: string; 
   
// }

// export type SetQuery = (
//     query?: Record<string, any>, 
//     clear?: boolean, 
//     append?: boolean
// ) => void; 

// export type ClearQuery = (
//     query?: Record<string, any>,
//     clearAll?: boolean
// ) => void; 

// export type GetQuery = (query?: Record<string, any> ) => any; 


