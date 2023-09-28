import React from 'react';
import CafeFeed from '../Cafe/CafeFeed';

const Welcome = () => {
	return (
		<div className="">
			<div className='bg-[url("https://www.v2.kypj.edu.my/wp-content/uploads/2020/04/kolej-01.png")] bg-cover h-[500px] bg-center bg-blend-multiply bg-slate-800'>
				<h1 className="text-center text-5xl font-bold">Welcome To KYPJ Cafe</h1>
				<CafeFeed />
			</div>
		</div>
	);
};

export default Welcome;
