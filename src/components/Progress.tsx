import React from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { BiInfoCircle } from "react-icons/bi";
function classNames(...classes: Array<string | undefined | null | boolean>): string {
	return classes.filter(Boolean).join(' ');
}

interface Event {
	id: number;
	content: string;
	target: string;
	iconBackground: string;
	active:boolean;
}


export const Progress = () => {
	const timeline: Event[] = [
		{
			id: 1,
			content: 'Select Source',
			target: 'In Progress',
			iconBackground: 'bg-blue-green',
			active:true,
		},
		{
			id: 2,
			content: 'Connect source',
			target: 'Not started',
			iconBackground: 'bg-gray-400',
			active:false,
		},
		{
			id: 3,
			content: 'Label data',
			target: 'Not started',
			iconBackground: 'bg-gray-400',
			active:false,
		},
	]

	return (
		<>
		<Tooltip className="example-diff-arrow" id="Select Source" >
				<BiInfoCircle className='mr-1.5 text-[18px]' />
				<span className='unnamed-character-style-13 '>Select your data</span>
			</Tooltip>
			<Tooltip className="example-diff-arrow" id="Connect source" >
				<BiInfoCircle className='mr-1.5 text-[18px]' />
				<span className='unnamed-character-style-13 '>Connect your data</span>
			</Tooltip>
			<Tooltip className="example-diff-arrow" id="Label data" >
				<BiInfoCircle className='mr-1.5 text-[18px]' />
				<span className='unnamed-character-style-13 '>Label your data</span>
			</Tooltip>
		<div className=" left-0 absolute top-[80px] lg:top-5 w-full flex items-center justify-center">
			<ul role="list" className=" flex gap-3 sm:gap-[49px]">
				{timeline.map((event: Event, eventIdx: number) => (
					<li key={event.id}>
						<div className="relative">
							
							<div className="relative   text-center">
								<div>
									<span className={classNames(event.active ? ' sm-unnamed-character-style-4 unnamed-character-style-4' : ' sm-unnamed-character-style-4 unnamed-character-style-8')}>
									{event.content}
									</span>
								</div>
								<div className='relative flex justify-center items-center'>
								{eventIdx !== timeline.length - 1 ? (
								<span className="absolute left-[3rem] sm:left-[3.3rem] -ml-px h-[1px] sm:h-[2px] w-full sm:w-[160px] bg-dark-silver" aria-hidden="true" />
							) : null}
									<span
									data-tooltip-id={event.content} 
									data-tooltip-place="right"
										className={classNames(
											event.active ? 'bg-blue-green' : "bg-white border-[2px] sm:border-[3px] border-dark-silver",
											
											'w-[20px] h-[20px] sm:h-[24px] z-[3] sm:w-[24px] rounded-full flex items-center justify-center '
										)}
									>
										{/* <event.icon className="h-5 w-5 text-white" aria-hidden="true" /> */}
									</span>
								</div>
								<div>
								<span className={classNames(event.active ? 'sm-unnamed-character-style-6 unnamed-character-style-6' : ' italic  sm-unnamed-character-style-8  unnamed-character-style-8')}>
									{event.target}
									</span>
								</div>
							
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
		</>
	)
}
