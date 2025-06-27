import ReactModal from "react-modal";
import './Modal.css';

ReactModal.setAppElement('#root');

function Modal({isOpen , onClose , cartItems , onRemove}){
    // Total Cart Price
    let totalPrice = cartItems.reduce((total , item)=>total + item.price , 0)

    return(
        <ReactModal
            isOpen ={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
            contentLabel={"Cart Modal"}
            style={{
                overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
            content: {
                top: '55%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '10px',
                padding: '2rem'
            }
            }}
        >
          
        {cartItems.length === 0 ? (
          <>
            <div className="text-right">
              <button onClick ={onClose} className="cursor-pointer"><span className="material-symbols-outlined">close</span></button>   
            </div>
            <p className="text-center text-[20px] font-semibold ">No items in cart</p>
          </>
           
        ) : (

        <ul className="list-none md:h-[450px] h-[200px]">
          
          <div className="flex justify-between border-b-1 border-[#d7d4d4] pb-3 items-center">  
            <h3 className="text-[20px] font-semibold hidden md:block">Shopping Cart</h3>
            <p className="text-[17px} font-semibold">Total Price : ₹ {totalPrice}</p>
            <button onClick ={onClose} className="cursor-pointer"><span className="material-symbols-outlined">close</span></button> 
          </div>

            {cartItems.map((item) => (
            <li key={item.id} className='mt-[25px]'>
              <div className="flex gap-[15px] items-center justify-between">
                <img src={item.image} alt={item.title} className="w-[80px] h-[80px]  object-contain" />
                <div>
                  <p className="text-center text-[16px] font-semibold hidden md:block">{item.title}</p>
                  <p className="text-center text-bold"><span className="hidden md:inline-block">Price :</span> ₹ {item.price}</p>
                </div>
                {onRemove && (
                  <button onClick={() => onRemove(item.id)} className="text-white bg-black py-[10px] px-5 text-[16px] text-center rounded-[4px] cursor-pointer">
                    Remove
                  </button>
                )}
              </div>
            </li>
          ))}
          
        </ul>
      )}
           
        </ReactModal>
    );

}

export default Modal;