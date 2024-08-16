"use server"
import {languages} from '../../i18n/settings'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
export default async function Alternate(){
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const generateUrlOfLng = (lng)=>{
        const segments = pathname.split('/');

        // Replace the first segment with the target language
        if (segments[1]) {
          segments[1] = lng;
        } else {
          segments.unshift(lng);
        }
        const newPathname = segments.join('/');
      
        // Construct the new URL with the updated pathname and existing query parameters
        const newSearchParams = new URLSearchParams(searchParams);
        const newUrl = `${newPathname}?${newSearchParams.toString()}`;

        return newUrl
    }

    return(
        <>
        {
            languages.map((lng)=>{
                <link rel="alternate" hreflang={lng} href={generateUrlOfLng(lng)} />
            })
        }

        </>
    )
}