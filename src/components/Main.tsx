import React from 'react'
import Aws from '../assets/images/1200px-Amazon_Web_Services_Logo.svg.png';
import Dropbox from '../assets/images/2560px-Dropbox_logo_2017.svg.png';
import Arxspan from '../assets/images/arxspan_owler_20190314_145133_original.png';
import CoaguSens from '../assets/images/CoaguSens Connect.png';
import CoaguSensFlex from '../assets/images/CoaguSens Flex.png';
import ElastoSensBio from '../assets/images/ElastoSens Bio.png';
import google from '../assets/images/google.png';
import IbmCloud from '../assets/images/ibm_cloud-ar21.png';
import File from '../assets/images/Icon awesome-file-csv.png';
import ImageFram from '../assets/images/imageSens Flex.png';
import Lab from '../assets/images/lab.png';
import AzureLogo from '../assets/images/Microsoft_Azure_Logo.svg.png';
import Excel from '../assets/images/Microsoft_Excel_2013-2019_logo.svg.png';
import MySql from '../assets/images/my_sql.png';
import Onedrive from '../assets/images/onedrive.png';
import Pdf from '../assets/images/pdf.png';
import Postsql from '../assets/images/postsql.png';
import ThermoFisher from '../assets/images/Thermo_Fisher_Scientific_logo.svg.png';





interface Event {
    id: number;
    titel: string;
    icon: string;
    subTitle: string;

}

const timeline: Event[] = [
    {
        id: 1,
        titel: 'Cloud Services',
        icon: Aws,
        subTitle: 'Amazon Web Services',
    },
    {
        id: 2,
        titel: 'Cloud Services',
        icon: Dropbox,
        subTitle: 'Dropbox',
    },
    {
        id: 3,
        titel: 'Softwares',
        icon: Arxspan,
        subTitle: 'Arxspan',
    },
    {
        id: 4,
        titel: 'Instruments',
        icon: CoaguSens,
        subTitle: 'CoaguSensTM Connect',
    },
    {
        id: 5,
        titel: 'Instruments',
        icon: CoaguSensFlex,
        subTitle: 'CoaguSensTM Flex',
    },
    {
        id: 6,
        titel: 'Cloud Services',
        icon: google,
        subTitle: 'Google Cloud Platform',
    },
    {
        id: 7,
        titel: 'Cloud Services',
        icon: IbmCloud,
        subTitle: 'IBM Cloud Services',
    },
    {
        id: 8,
        titel: 'Files',
        icon: File,
        subTitle: 'CSV',
    },
    {
        id: 9,
        titel: 'Media',
        icon: ImageFram,
        subTitle: 'Image',
    },
    {
        id: 10,
        titel: 'Softwares',
        icon: Lab,
        subTitle: 'Software',
    },
    {
        id: 11,
        titel: 'Cloud Services',
        icon: AzureLogo,
        subTitle: 'Microsoft Azure',
    },
    {
        id: 12,
        titel: 'Softwares',
        icon: Excel,
        subTitle: 'Excel',
    },
    {
        id: 13,
        titel: 'Databases',
        icon: MySql,
        subTitle: 'MySQL',
    },
    {
        id: 14,
        titel: 'Cloud Services',
        icon: Onedrive,
        subTitle: 'Microsoft OneDrive',
    },
    {
        id: 15,
        titel: 'Files',
        icon: Pdf,
        subTitle: 'PDF',
    },
    {
        id: 16,
        titel: 'Databases',
        icon: Postsql,
        subTitle: 'PostgreSQL',
    },
    {
        id: 17,
        titel: 'Softwares',
        icon: ThermoFisher,
        subTitle: 'SampleManager LIMS',
    },
    {
        id: 18,
        titel: 'Softwares',
        icon: ElastoSensBio,
        subTitle: 'Azure',
    },
]

const Main = ({filterData}:{filterData:string}) => {
    console.log("🚀 ~ file: Main.tsx:106 ~ Main ~ props:", filterData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-7 px-8  min-h-[486px] max-h-[486px] lg:pr-[50px] lg:pl-[10px]'>
            {
                timeline.filter((item)=>{
                    if (filterData=== "" || filterData === "All sources") {
                        return item
                    }else if(filterData=== item.titel){
                        return item
                    }
                }).map((item) => {
                    return (

                        <div key={item.id} className='px-[27px] h-[217px] justify-between  text-center flex flex-col items-center border rounded-[20px] hover:shadow-main border-silver-sand py-[24px]'>
                           
                                <span className='unnamed-character-style-6'>{item.titel}</span>
                                <img src={item.icon} className="mx-auto max-h-[90px] w-auto"  />
                                <h2 className='unnamed-character-style-4 '>{item.subTitle}</h2>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main