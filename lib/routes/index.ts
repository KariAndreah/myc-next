import * as AllRoutes from './routes';

type GetPathToParamsType = {
    pathname: string; 
    params?: Record<string, any>; 
    search?: Record<string, any>;
}

const to = ({pathname, params = {}, search}: GetPathToParamsType): string => {
    const splitPath = pathname.split('/');
    const pathRegex = /^\[\w*\]$/g;

    const newPath = splitPath.map((elm) => 
    pathRegex.test(elm)? params[elm.slice(1,-1)] || 'undefined': elm).join('/');

    return !search ? newPath : `${newPath}?${new URLSearchParams(search).toString()}`; 
}

export const Routes = {
    ...AllRoutes, to,
}