import React from 'react';

function Player() {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full bg-[#212020]">
          <div className="bg-[#252525] border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-2 pb-0 sm:p-4 sm:pb-3 lg:p-2 lg:pb-1 xl:p-4 xl:pb-3 space-y-2 sm:space-y-4 lg:space-y-2 xl:space-y-4 items-center">
            <div className="flex items-center space-x-4">
              <img
                src="https://img.freepik.com/free-psd/square-flyer-template-maximalist-business_23-2148524497.jpg?w=1800&t=st=1699458420~exp=1699459020~hmac=5b00d72d6983d04966cc08ccd0fc1f80ad0d7ba75ec20316660e11efd18133cd"
                alt=""
                width="60"
                height="40"
                className="flex-none rounded-lg bg-slate-100 mb-2"
                loading="lazy"
              />
              <div className="min-w-0 flex-auto space-y-1 font-semibold mb-4">
                <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
                  {/* <abbr title="Track">Track:</abbr> 05 */}
                </p>
                <h2 className="text-slate-200 dark:text-slate-400 leading-6 truncate text-[16px] md:text-[19px] ">
                  Music: New Album The Lorem
                </h2>
                <p className="text-slate-200 dark:text-slate-50 text-[12px] md:text-[15px]">
                  Spotisimo
                </p>
              </div>
            </div>
            <div className="space-y-0 md:space-y-[-30px]">
              <div className="relative">
                <div className="bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-500 dark:bg-cyan-400 w-1/2 h-2"
                    role="progressbar"
                    aria-label="music progress"
                    aria-valuenow="1456"
                    aria-valuemin="0"
                    aria-valuemax="4550"
                  ></div>
                </div>
                <div className="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                  <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                </div>
                <div>
                  
                </div>
              </div>
              <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                <div className="text-cyan-500 dark:text-slate-100 text-[11px] md:text-[14px]">
                  1:75
                  
                </div>
                <div className="text-slate-200 dark:text-slate-400 text-[11px] md:text-[14px]">
                  3:20
                </div>
               
              </div>
              <div className='flex  space-x-3 absolute top-[42px] right-[30px] gap-2 text-slate-200 lg:right-[10%] lg:top-[50px] lg:gap-4'> 
                
              <i className="fa-solid fa-backward text-[25px] cursor-pointer  lg:text-[30px]"></i>
                <i className="fa-solid fa-play text-[25px] cursor-pointer lg:text-[30px]" ></i>
                <i className="fa-solid fa-forward text-[25px] cursor-pointer lg:text-[30px]"></i>
             
             <div>
             <i className=" hidden lg:block md:block fa-solid fa-volume-high text-[25px] cursor-pointer lg:text-[28px]"></i>
             </div>
             
             
                
                </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Player;
