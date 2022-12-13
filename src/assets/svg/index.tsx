import React, { ComponentPropsWithoutRef, FC } from "react";

export const Moon: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width="13"
			height="13"
			viewBox="0 0 256 256"
			{...props}
		>
			<defs></defs>
			<g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
				<path
					d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z"
					transform=" matrix(1 0 0 1 0 0) "
					strokeLinecap="round"
				/>
			</g>
		</svg>
	);
};

export const LeftArrow: FC<ComponentPropsWithoutRef<"svg">> = ({
	...props
}) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M4.70975 10.9901L13.3095 19.5896C13.8565 20.1369 14.7435 20.1369 15.2903 19.5896C15.8371 19.0427 15.8371 18.1558 15.2903 17.6091L7.6808 9.99988L15.29 2.39096C15.8369 1.84391 15.8369 0.957107 15.29 0.410284C14.7432 -0.136761 13.8563 -0.136761 13.3093 0.410284L4.70953 9.00985C4.43611 9.28339 4.29956 9.64153 4.29956 9.99983C4.29956 10.3583 4.43638 10.7167 4.70975 10.9901Z" />
		</svg>
	);
};

export const Search: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M19.361 18.2168L14.601 13.2662C15.8249 11.8113 16.4954 9.98069 16.4954 8.07499C16.4954 3.62251 12.8729 0 8.42045 0C3.96797 0 0.345459 3.62251 0.345459 8.07499C0.345459 12.5275 3.96797 16.15 8.42045 16.15C10.092 16.15 11.6849 15.6458 13.0467 14.6888L17.8429 19.677C18.0434 19.8852 18.313 20 18.602 20C18.8755 20 19.1349 19.8957 19.3319 19.7061C19.7504 19.3034 19.7637 18.6357 19.361 18.2168ZM8.42045 2.10652C11.7115 2.10652 14.3889 4.78391 14.3889 8.07499C14.3889 11.3661 11.7115 14.0435 8.42045 14.0435C5.12937 14.0435 2.45198 11.3661 2.45198 8.07499C2.45198 4.78391 5.12937 2.10652 8.42045 2.10652Z" />
		</svg>
	);
};

export const Smile: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
			/>
		</svg>
	);
};

export const Sad: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
			/>
		</svg>
	);
};

export const Heart: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="30"
			height="26"
			viewBox="0 0 30 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68122 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z"
			/>
		</svg>
	);
};

export const HeartFilled: FC<ComponentPropsWithoutRef<"svg">> = ({
	...props
}) => {
	return (
		<svg
			width="30"
			height="26"
			viewBox="0 0 30 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M8.07107 0C3.61354 0 0 3.61354 0 8.07107C0 10.2116 0.850339 12.2646 2.36396 13.7782L14.2929 25.7071C14.6834 26.0976 15.3166 26.0976 15.7071 25.7071L27.636 13.7782C29.1497 12.2646 30 10.2116 30 8.07107C30 3.61354 26.3865 0 21.9289 0C19.7884 0 17.7354 0.850341 16.2218 2.36396L15 3.58579L13.7782 2.36396C12.2646 0.850343 10.2116 0 8.07107 0Z" />
		</svg>
	);
};

export const BurgerMenu: FC<ComponentPropsWithoutRef<"svg">> = ({
	...props
}) => {
	return (
		<svg
			width="30"
			height="18"
			viewBox="0 0 30 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z"
			/>
		</svg>
	);
};

export const Close: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="26"
			height="26"
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.5859 12.9996L0.292969 1.70669L1.70718 0.29248L13.0001 11.5854L24.293 0.29248L25.7072 1.70669L14.4143 12.9996L25.7072 24.2925L24.293 25.7067L13.0001 14.4138L1.70718 25.7067L0.292969 24.2925L11.5859 12.9996Z"
			/>
		</svg>
	);
};

export const ASC: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="19"
			height="22"
			viewBox="0 0 19 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.80474 19.319V0H5.13807V19.319L8 16.1995L8.94281 17.2272L4.94281 21.5872C4.81778 21.7234 4.64822 21.8 4.4714 21.8C4.29459 21.8 4.12502 21.7234 4 21.5872L0 17.2272L0.942809 16.1995L3.80474 19.319ZM15.1381 1.45333C14.0335 1.45333 13.1381 2.42935 13.1381 3.63333V5.81333H17.1381V3.63333C17.1381 2.42935 16.2426 1.45333 15.1381 1.45333ZM17.1381 7.26667V10.1733H18.4714V3.63333C18.4714 1.6267 16.979 0 15.1381 0C13.2971 0 11.8047 1.6267 11.8047 3.63333V10.1733H13.1381V7.26667H17.1381ZM11.8047 11.6267H15.8047C17.2775 11.6267 18.4714 12.928 18.4714 14.5333C18.4714 15.4015 18.1222 16.1807 17.5686 16.7133C18.1222 17.2459 18.4714 18.0252 18.4714 18.8933C18.4714 20.4986 17.2775 21.8 15.8047 21.8H11.8047V11.6267ZM15.8047 15.9867C16.5411 15.9867 17.1381 15.336 17.1381 14.5333C17.1381 13.7307 16.5411 13.08 15.8047 13.08H13.1381V15.9867H15.8047ZM13.1381 17.44H15.8047C16.5411 17.44 17.1381 18.0907 17.1381 18.8933C17.1381 19.696 16.5411 20.3467 15.8047 20.3467H13.1381V17.44Z"
			/>
		</svg>
	);
};

export const DESC: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="19"
			height="22"
			viewBox="0 0 19 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 0.212836C4.26035 -0.0709453 4.68246 -0.0709453 4.94281 0.212836L8.94281 4.57284L8 5.6005L5.13807 2.48099V21.8H3.80474V2.48099L0.942809 5.6005L0 4.57284L4 0.212836ZM15.1381 1.45333C14.0335 1.45333 13.1381 2.42935 13.1381 3.63333V5.81333H17.1381V3.63333C17.1381 2.42935 16.2426 1.45333 15.1381 1.45333ZM17.1381 7.26667V10.1733H18.4714V3.63333C18.4714 1.6267 16.979 1.08282e-08 15.1381 1.08282e-08C13.2971 1.08282e-08 11.8047 1.6267 11.8047 3.63333V10.1733H13.1381V7.26667H17.1381ZM11.8047 11.6267H15.8047C17.2775 11.6267 18.4714 12.928 18.4714 14.5333C18.4714 15.4015 18.1222 16.1807 17.5686 16.7133C18.1222 17.2459 18.4714 18.0252 18.4714 18.8933C18.4714 20.4986 17.2775 21.8 15.8047 21.8H11.8047V11.6267ZM15.8047 15.9867C16.5411 15.9867 17.1381 15.336 17.1381 14.5333C17.1381 13.7307 16.5411 13.08 15.8047 13.08H13.1381V15.9867H15.8047ZM13.1381 17.44H15.8047C16.5411 17.44 17.1381 18.0907 17.1381 18.8933C17.1381 19.696 16.5411 20.3467 15.8047 20.3467H13.1381V17.44Z"
			/>
		</svg>
	);
};

export const Arrow: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="7"
			height="12"
			viewBox="0 0 7 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M5.99984 12C5.74397 12 5.48797 11.9023 5.29297 11.707L0.292969 6.70703C-0.0976562 6.31641 -0.0976562 5.68359 0.292969 5.29297L5.29297 0.292969C5.68359 -0.0976562 6.31641 -0.0976562 6.70703 0.292969C7.09766 0.683594 7.09766 1.31641 6.70703 1.70703L2.41391 6L6.70766 10.2937C7.09828 10.6844 7.09828 11.3172 6.70766 11.7078C6.51234 11.9031 6.25609 12 5.99984 12Z" />
		</svg>
	);
};

export const Upload: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
			/>
		</svg>
	);
};

export const Refresh: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="18"
			height="20"
			viewBox="0 0 18 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z"
			/>
		</svg>
	);
};

export const File: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			viewBox="0 0 200 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M140 40C128.954 40 120 48.9543 120 59.9999C120 71.0456 128.954 79.9999 140 79.9999C151.046 79.9999 160 71.0456 160 59.9999C160 48.9543 151.046 40 140 40Z"
				fill="#F8F8F7"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 20C0 8.9543 8.9543 0 20 0H180C191.046 0 200 8.9543 200 20V180C200 181.38 199.86 182.729 199.594 184.031C199.199 185.958 198.528 187.784 197.623 189.465C194.247 195.737 187.621 200 180 200H20C8.95431 200 0 191.046 0 180V20ZM64.6564 41.8952L60 37.2387L13.3333 83.9054V20C13.3333 16.3181 16.3181 13.3333 20 13.3333H180C183.682 13.3333 186.667 16.3181 186.667 20V133.333H156.095L64.7145 41.9526C64.6953 41.9333 64.6759 41.9142 64.6564 41.8952Z"
			/>
		</svg>
	);
};

export const Success: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z"
			/>
		</svg>
	);
};

export const Error: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z"
			/>
		</svg>
	);
};

export const GitHub: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			{...props}
		>
			<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
		</svg>
	);
};

export const LinkedIn: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			{...props}
		>
			<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
		</svg>
	);
};

export const API: FC<ComponentPropsWithoutRef<"svg">> = ({ ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			{...props}
		>
			<path d="M24 9h-24v6h24v-6zm-22 4l.863-2h1.275l-.863 2h-1.275zm2.066 0l.863-2h1.275l-.863 2h-1.275zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm9.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm3 4h-24v6h24v-6zm-22 4l.863-2h1.275l-.863 2h-1.275zm2.066 0l.863-2h1.275l-.863 2h-1.275zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm9.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm1-14h-20l4-6h12l4 6z" />
		</svg>
	);
};
