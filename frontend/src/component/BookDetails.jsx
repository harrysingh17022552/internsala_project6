import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
//importing addItem action from the cartSlice
import { addItem } from "../store/slices/cartSlice";
export default function BookDetails() {
  // this returns the object that contain all the params that we dynamically allocated in route section
  const params = useParams();
  //used to navigate to the page
  const navigate = useNavigate();
  //used useSelector to read data from store or to use data from store, here we are using books array that we used in initial state
  const books = useSelector((store) => store.books.items);

  //state for the book, params pointing for and updating this array when this dependency updates
  const [currentBook, setCurrentBook] = useState([]);
  useEffect(() => {
    setCurrentBook(
      books.filter((item) => parseInt(item.id) === parseInt(params.id))
    );
  }, [books, params]);

  //function takes an parameter which is item object and using dispatch, we will add item to the cart using addItem action.
  //also adding quantity initial value as 1
  const dispatch = useDispatch();
  const handleATC = (e, item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
    e.target.textContent = "Added ✔";
    e.target.disabled = true;
  };

  //This is BookDetails Component that takes the book id from the url and then it filter that book from the books.
  return currentBook.length > 0 ? (
    currentBook.map((book) => (
      <section
        key={`unique/bookdetails/${book.id}`}
        className="w-full flex flex-col justify-center items-center gap-4 p-4"
      >
        {/* navigation area to move one step backward */}
        <div className="flex flex-nowrap items-center gap-4">
          <div>
            <FaArrowAltCircleLeft
              className="text-3xl text-blue-600 hover:scale-110 hover:text-green-400 cursor-pointer transition-all"
              onClick={() => navigate(-1)}
            />
          </div>
          <h2 className="text-4xl">{book.bookname.toUpperCase()}</h2>
        </div>
        <h3 className="text-xl">{book.booktitle}</h3>
        {/* section that shows the book image, and book information like author, when published,  price, category,Rating & Description */}
        <div className="w-full justify-center flex flex-wrap sm:flex-nowrap gap-8">
          <img
            className="w-full sm:w-1/3 lg:w-1/6 object-contain self-start rounded-lg  transition-all"
            src={book.bookimage}
            alt={book.booktitle}
            onError={(e) => {
              e.target.src = `https://placehold.co/600x900/1E3A8A/FFFFFF?text=${encodeURIComponent(
                book.bookname
              )}&font=montserrat`;
            }}
          />
          <div className="flex flex-col gap-2 justify-center md:text-xl items-start">
            <p>
              <strong>Author : </strong>
              <span>{book.bookauthor}</span>
            </p>
            <p>
              <strong>Published In : </strong>
              <span>{book.bookpublished}</span>
            </p>
            <p>
              <strong>Price : </strong>
              <span>{book.bookprice}</span>
            </p>
            <p>
              <strong>Category : </strong>
              <span>{book.category}</span>
            </p>
            <p>
              <strong>Rating : </strong>
              <span>{book.rating}</span>
            </p>
            <p>
              <strong>Description : </strong>
              <span>
                {book.description
                  ? book.description
                  : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                est dignissimos libero dolores. Dolore quod officia, eveniet
                ratione temporibus autem necessitatibus voluptates ea optio est
                id quo fugit placeat expedita!`}
              </span>
            </p>
          </div>
        </div>
        {/* Adding Add to cart && Buy Now button, Buy Now will direct to make order page without adding any other item and add to cart will just item to the cart using redux */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button className="border shadow-[0.01px_0.01px_10px_1px_white_inset] hover:shadow-[0.01px_0.01px_15px_1px_blue_inset]">
            Buy Now
          </button>
          <button
            className="border shadow-[0.01px_0.01px_10px_1px_white_inset] hover:shadow-[0.01px_0.01px_15px_1px_green_inset]"
            onClick={(e) => handleATC(e, book)}
          >
            Add to Cart
          </button>
        </div>
      </section>
    ))
  ) : (
    <section className="flex w-full gap-4 text-red-500 text-xl justify-center items-center">
      <FaArrowAltCircleLeft
        className="text-4xl text-blue-600 hover:text-green-500 transition-all cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <p>Sorry, This Kind of book doesn't Exist</p>
    </section>
  );
}
