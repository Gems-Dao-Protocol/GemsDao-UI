
interface PopupProps {
    isOpen?: boolean,
    children?: React.ReactNode,
    header?: string,
    backgroundColorModal?: any,
    handleClose: () => void
}

const contentModalStyle = {
    overflow: 'auto',
    maxHeight: 'calc(100vh - 125px)'
}

export default function Modal({
    isOpen,
    header,
    children,
    handleClose
}: PopupProps) {

    const handleWindowClick = (event) => {
        const modal = document.getElementById("id-gemsdao-modal");
        if (event.target.id == modal.id) {
            handleClose()
        }
    }
    
    return (
        <div
            id="id-gemsdao-modal"
            aria-hidden="true"
            role="dialog"
            style={{ backgroundColor: '#00000020', display: isOpen ? "flex" : "none" }}
            className="modal-fadeIn overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 justify-center items-center h-modal h-full inset-0"
            onClick={(e) => handleWindowClick(e)}
        >
            <div className="w-full w-auto h-auto mt-8">
                <div className={`rounded-2xl shadow bg-white border border-[#DEDEDE]`}>
                    <div className="flex flex-row justify-between mt-2 w-full">
                        <div className='text-[20px] font-medium ml-6'>
                            {header}
                        </div>
                        <div className="flex justify-end p-2">
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-black-400 hover:text-gray-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                onClick={handleClose}>
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 1L1.5 10M1.5 1L10.5 10" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr className="w-full mt-1 sm:mt-2" style={{ borderTop: "1px solid #DEDEDE" }} />
                    <div style={contentModalStyle}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}