import type { MDXComponents } from 'mdx/types'
import "./app/globals.css";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {

    h1: ({children}) => (<h1 className={"text-5xl underline my-8 font-semibold"}>{children}</h1>), 
    h2: ({children}) => (<h2 className={"text-3xl underline py-4 px-4 font-light"}>{children}</h2>), 
    h3: ({children}) => (<h3 className={"text-xl underline py-4 font-light"}>{children}</h3>), 
    li:({children}) =>(<><li className={"py-3 text-xl  font-thin"}> {'->'} {children}</li></>),
    p:({children})=><p className={"py-4 text-xl font-thin"}>{children}</p>,

    ...components,
  }
}