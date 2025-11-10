import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { updateItem, removeItem } from "../store/slices/cartSlice";
import { useOutletContext } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { setPopMessage } = useOutletContext();
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (item, type) => {
    dispatch(updateItem({ id: item.id, type }));
    setPopMessage("Successfully Updated Item");
  };
  const handleDelete = (id) => {
    dispatch(removeItem({ id }));
    setPopMessage("Successfully Deleted Item");
  };
  const calculateTotal = () => {
    return cartItem.reduce(
      (acc, curr) => acc + curr.bookprice * curr.quantity,
      0
    );
  };
  return (
    <section className="relative flex flex-col w-full h-full gap-8 noscrollbar">
      <div className="flex p-4 gap-4 justify-center items-center">
        <div className="animate-[fromLeft_1s_ease]">
          <FaHome
            className="text-4xl md:text-6xl cursor-pointer text-blue-600"
            onClick={() => navigate("/")}
          />
        </div>
        <h1 className="text-center text-4xl md:text-6xl text-transparent bg-clip-text bg-linear-to-b from-violet-600 to-red-600 tracking-tight transition-colors animate-[fromRight_1s_ease]">
          Cart Item's
        </h1>
      </div>
      <article className="flex flex-col p-4 gap-4 w-full md:w-[75%] xl:w-1/2 self-center mb-20">
        {cartItem.length > 0 ? (
          cartItem.map((item, index) => (
            <article
              key={`cart/item/${index}`}
              px
              className="flex flex-col min-[480px]:flex-row gap-4 justify-between rounded-md overflow-hidden border"
            >
              <div className="flex flex-col min-[400px]:flex-row gap-4 justify-start">
                <img
                  className="self-center w-full sm:self-center min-[400px]:w-[150px] object-contain rounded-md"
                  src={item.bookimage}
                  alt={item.bookname}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x900/1E3A8A/FFFFFF?text=${encodeURIComponent(
                      item.bookname
                    )}&font=montserrat`;
                  }}
                />
                <div className="flex  flex-col justify-around gap-2 p-2">
                  <div
                    className="flex flex-col
                "
                  >
                    <h2 className="text-xl sm:text-3xl font-bold">
                      {item.bookname}
                    </h2>
                    <h4>{item.booktitle}</h4>
                  </div>
                  <p>
                    <strong>Author : </strong>
                    <span>{item.bookauthor}</span>
                  </p>
                  <p>
                    <strong>Published on : </strong>
                    <span>{item.bookpublished}</span>
                  </p>
                  <div className="flex gap-4 items-center flex-wrap">
                    <p>
                      <strong>Price : </strong>
                      <span>{item.bookprice * item.quantity}</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <strong>Quantity : </strong>
                      <div className="flex gap-2 items-center">
                        <button onClick={() => handleUpdate(item, "dec")}>
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => handleUpdate(item, "inc")}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center bg-red-500 px-4">
                <MdDelete
                  className="text-4xl cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </article>
          ))
        ) : (
          <p className="text-xl text-center font-bold text-red-500">
            No Item Found in the cart !
          </p>
        )}
      </article>
      {cartItem.length > 0 && (
        <article className="fixed w-full bg-black text-white p-4 flex flex-col sm:flex-row gap-4 justify-center items-center bottom-0">
          <div className="flex flex-nowrap gap-2">
            <strong>Total Items :</strong>
            <p>{cartItem.length}</p>
          </div>
          <div className="flex flex-nowrap gap-2">
            <strong>Total Amount :</strong>
            <p>₹ {calculateTotal()}</p>
          </div>
          <button className="hover:scale-90 transition-all">
            Proceed to Buy
          </button>
        </article>
      )}
    </section>
  );
}
