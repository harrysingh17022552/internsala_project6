import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { updateItem, removeItem } from "../store/slices/cartSlice";
export default function Cart() {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleUpdate = (item, type) => {
    dispatch(updateItem({ id: item.id, type }));
  };

  return (
    <section className="flex flex-col w-full gap-8 p-4">
      <h1 className="text-center text-4xl">Cart Item's</h1>
      <article className="flex flex-col gap-4 w-full md:w-[75%] xl:w-1/2 self-center">
        {cartItem.length > 0 ? (
          cartItem.map((item, index) => (
            <article
              key={`cart/item/${index}`}
              className="flex gap-4 justify-between rounded-md overflow-hidden border"
            >
              <div className="flex gap-4 justify-start">
                <img
                  className="self-start sm:self-center w-[150px] object-contain rounded-md"
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
                    <h2 className="text-xl sm:text-3xl font-bold">{item.bookname}</h2>
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
                  onClick={() => dispatch(removeItem({ id: item.id }))}
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
    </section>
  );
}
