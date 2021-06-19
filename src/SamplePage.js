import React from  'react'

function SamplePage(){
    return (
        <div className="flex md:flex-row flex-col pb-8">
            <div className="md:w-1/4 w-full">
                <div className="bg-white p-5 shadow">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div className="bg-white p-5 shadow mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut beatae corporis, cum eaque earum error exercitationem, harum hic in iure nam non quaerat quia quod tempora vel vero!
                </div>
            </div>
            <div className="md:w-3/4 w-full   md:ml-4">
                <div className="flex md:flex-row flex-col">
                    <div className="bg-white p-5 shadow  md:w-2/4 w-full md:mx-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div className="bg-white p-5 shadow md:w-2/4 md:mt-0 mt-5 w-full md:mx-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>

                <div className="bg-white p-5 shadow mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut beatae corporis, cum eaque earum error exercitationem, harum hic in iure nam non quaerat quia quod tempora vel vero!
                </div>
            </div>
        </div>
    )
}export default SamplePage
