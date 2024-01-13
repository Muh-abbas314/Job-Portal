"use client"
import { IoCheckmarkOutline } from "react-icons/io5";
import { GiBinoculars } from "react-icons/gi";
import Link from "next/link";
export default function ApplicationSuccess() {
	return (<div className="flex flex-col justify-center items-center">
		<svg width="300" height="145" viewBox="0 0 253 145" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.168 145C39.168 145 43.8347 6.39181 203.099 1.36133L172.902 145H39.168Z" fill="#B9DAD0"></path><path d="M149.074 144.999H0.859375L36.8972 61.8398C73.9817 64.2784 129.478 100.889 149.074 144.999Z" fill="#7BC0AE"></path><path d="M136.471 140.757C136.459 140.778 136.446 140.8 136.434 140.822C153.515 115.71 154.311 107.217 155.002 99.8408C155.116 98.6261 155.227 97.4416 155.408 96.2182C155.439 96.0296 155.653 95.5478 155.868 95.0659C156.082 94.5841 156.297 94.1022 156.328 93.9136C155.532 93.2903 154.318 92.5076 153.284 91.8691C152.437 93.1179 151.687 94.2309 151.179 94.9845C150.76 95.6049 150.506 95.9817 150.498 95.9901C150.49 95.9979 150.374 96.2433 150.208 96.593C149.924 97.1894 149.497 98.0891 149.22 98.6307L149.179 98.7119C148.166 100.759 147.161 102.789 146.81 105.044C146.782 105.226 146.766 105.766 146.741 106.579C146.652 109.498 146.455 115.945 145.259 122.124C144.137 127.923 140.755 134.419 136.471 140.757Z" fill="#462615"></path><g filter="url(#filter0_di)"><path d="M251.142 10.7181L189.6 117.43L158.394 87.5933L251.142 10.7181Z" fill="url(#paint0_linear)"></path></g><g filter="url(#filter1_di)"><path d="M140.442 73.3638L140.441 73.3615L140.445 73.3635L251.086 10.7139L250.817 10.9869L158.393 87.5933L167.159 95.9749L153.053 110.305L140.442 73.3638Z" fill="#F5CB9D"></path></g><path d="M137.19 91.5054C137.19 91.5054 141.097 83.8137 142.693 79.9541L143.751 83.0523C143.093 83.9305 142.596 84.5926 142.472 84.7571L137.19 91.5054Z" fill="#89471E"></path><path d="M136.434 140.822L136.47 140.758C140.755 134.42 144.137 127.924 145.259 122.124C146.455 115.946 146.652 109.498 146.741 106.58C146.766 105.766 146.782 105.227 146.81 105.044C147.156 102.826 148.134 100.825 149.13 98.8115L153.054 110.305L153.064 110.296C151.035 116.741 146.643 125.813 136.434 140.822Z" fill="#89471E"></path><path d="M148.108 95.8164C147.276 97.5099 146.54 99.2136 146.266 101.1C146.156 101.843 145.873 102.878 145.565 104.002C144.997 106.078 144.347 108.457 144.55 109.857C145.304 114.99 144.739 126.408 136.434 140.822C146.643 125.813 151.035 116.741 153.064 110.295L153.054 110.305L148.108 95.8164Z" fill="#462615"></path><path d="M148.108 95.8164C147.276 97.5099 146.54 99.2136 146.266 101.1C146.156 101.843 145.873 102.878 145.565 104.002C144.997 106.078 144.347 108.457 144.55 109.857C145.304 114.99 144.739 126.408 136.434 140.822C146.643 125.813 151.035 116.741 153.064 110.295L153.054 110.305L148.108 95.8164Z" fill="#89471E"></path><g filter="url(#filter2_di)"><path d="M158.447 87.6446L158.344 87.5869L153.057 110.306L167.257 96.0683L158.447 87.6446Z" fill="#74234E"></path></g><path d="M106.916 52.4674L140.445 73.3645L251.091 10.7119L106.916 52.4674Z" fill="white"></path><path d="M128.959 66.2047L140.446 73.3636L140.514 73.3248L142.697 79.9437C141.104 83.7998 137.19 91.5055 137.19 91.5055L142.472 84.7572C142.812 84.3081 145.922 80.1518 147.522 78.012C148.15 77.1737 148.894 76.4372 149.666 75.7302C150.575 74.8986 151.411 73.9908 152.175 73.0211C154.249 70.3595 157.623 66.0842 157.623 66.0842C158.713 64.3657 161.228 64.3238 162.381 66.0214C162.391 66.0318 162.402 66.0476 162.412 66.0633C162.423 66.079 162.433 66.0947 162.443 66.1052C162.443 66.1157 162.449 66.1209 162.454 66.1262C162.459 66.1314 162.464 66.1366 162.464 66.1471C164.371 68.9764 164.602 72.602 163.114 75.6617C162.869 76.1706 162.607 76.7472 162.328 77.3612C162.297 77.43 162.266 77.4992 162.234 77.5689L162.163 77.726C161.257 79.724 160.207 82.0392 158.839 83.877C157.097 86.2045 152.841 92.5188 151.179 94.9847C150.76 95.6051 150.506 95.9819 150.498 95.9903C150.49 95.9981 150.374 96.2435 150.208 96.5932C149.924 97.1896 149.497 98.0893 149.22 98.631L149.179 98.7121C148.166 100.759 147.161 102.789 146.81 105.044C146.782 105.227 146.766 105.766 146.741 106.58C146.652 109.498 146.455 115.946 145.259 122.124C143.897 129.166 139.202 137.234 133.607 144.8H85.6992L114.264 124.911C116.715 122.271 118.182 118.876 118.413 115.271L119.712 84.7363L119.838 83.2692C120.433 75.7175 124.766 70.4163 128.959 66.2047Z" fill="#B4602B"></path><path d="M160.703 70.5246C160.703 70.5246 160.893 67.1135 157.615 66.0186L153.344 71.409C153.344 71.409 155.332 71.9985 157.108 77.5574L160.703 70.5246Z" fill="#89471E"></path><defs><filter id="filter0_di" x="158.395" y="10.7181" width="93.7484" height="107.712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="0.5" dy="0.5"></feOffset><feGaussianBlur stdDeviation="0.25"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="0.5" dy="0.5"></feOffset><feGaussianBlur stdDeviation="0.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend></filter><filter id="filter1_di" x="140.441" y="10.7139" width="111.644" height="100.591" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="0.5" dy="0.5"></feOffset><feGaussianBlur stdDeviation="0.25"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="0.5" dy="0.5"></feOffset><feGaussianBlur stdDeviation="0.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend></filter><filter id="filter2_di" x="153.057" y="87.5869" width="15.2005" height="23.7188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="0.5" dy="0.5"></feOffset><feGaussianBlur stdDeviation="0.25"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="0.5" dy="0.5"></feOffset><feGaussianBlur stdDeviation="0.25"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend></filter><linearGradient id="paint0_linear" x1="231.565" y1="11.7081" x2="214.829" y2="121.551" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E867A8"></stop><stop offset="1" stop-color="#9D2B6B"></stop></linearGradient></defs></svg>
		<h1 className="font-bold text-3xl">Your Application has been submitted!</h1>

		<div className="flex my-3 ">
			<span><IoCheckmarkOutline size={20} className="mx-2" /></span>
			<p>You will get an email confirmation on your account</p>

		</div>
		<div className="border w-[80vw] p-3 rounded-md">
			<span className="flex ">
				<GiBinoculars size={30} />
				<h2 className="font-bold mx-2 text-md text-left">Keep Track of your Applications</h2>
			</span>
			<p className="text-justify my-2">You will recieve a status update in an email from Indeed within a few weeks of submitting your  appliaction. In the meantime, you can view an dtrack all your applications in the Indeed my Job section at any time.</p>
		</div>
		<Link href={`/`} className="border border-blue-500 rounded-md  my-2 text-blue-500 font-semibold p-2 text-xl">
			Return to Job Search
		</Link>
	</div>)
}