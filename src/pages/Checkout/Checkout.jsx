import { useContext, useState } from "react";
import PKFLAG from "../../assets/pk-flag.svg";
import { Button } from "antd";
import { CartItemsContext } from "../../Context/CartContext";

const Checkout = () => {
  const [steps, setSteps] = useState("checkout");
  const {cartItems , setCartItems} = useContext(CartItemsContext)

  const subAmount = cartItems.reduce(
    (total, obj) => total + obj.qty * obj.price,
    0
  );
  const salesTax = subAmount * 0.02;
  const discount = subAmount > 1000 && subAmount * 0.1;
  const shippingCharges = subAmount < 2000 && subAmount * 0.1;
  const grandTotal = subAmount + salesTax + shippingCharges - discount;
  return (
    <>
      <div className="main-content">
        <div className="layout">
          <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                  <span
                    className={`flex items-center after:mx-2 after:text-gray-200  after:content-['/'] sm:after:hidden ${
                      steps == "checkout" ? "text-black" : "text-gray-500"
                    }`}
                  >
                    <svg
                      className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    Checkout
                  </span>
                </li>
                <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                  <span
                    className={`flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden  ${
                      steps == "payment"
                        ? "text-black"
                        : "dark:after:text-gray-500"
                    }`}
                  >
                    <svg
                      className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    Payment
                  </span>
                </li>
                <li
                  className={`flex shrink-0 items-center ${
                    steps == "orderSummary" ? "text-black" : "text-gray-500"
                  }`}
                >
                  <svg
                    className="me-2 h-4 w-4 sm:h-5 sm:w-5 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Order summary
                </li>
              </ol>

              <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                {steps == "checkout" && (
                  <div className="min-w-0 flex-1 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Delivery Details
                      </h2>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="your_name"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your name
                          </label>
                          <input
                            type="text"
                            id="your_name"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Bonnie Green"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="your_email"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email*
                          </label>
                          <input
                            type="email"
                            id="your_email"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="name@flowbite.com"
                            required=""
                          />
                        </div>
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <label
                              htmlFor="select-country-input-3"
                              className="block text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Country*
                            </label>
                          </div>
                          <select
                            id="select-country-input-3"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          >
                            <option value="">Choose your Country</option>
                            <option value="PK">Pakistan</option>
                            <option value="DU">Dubai</option>
                            <option value="SU">Sudia Arabia</option>
                            <option value="TK">Turkey</option>
                            <option value="US">United States</option>
                            <option value="AS">Australia</option>
                            <option value="FR">France</option>
                            <option value="ES">Spain</option>
                            <option value="UK">United Kingdom</option>
                          </select>
                        </div>
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <label
                              htmlFor="select-city-input-3"
                              className="block text-sm font-medium text-gray-900 dark:text-white"
                            >
                              City*
                            </label>
                          </div>
                          <select
                            id="select-city-input-3"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          >
                            <option value="">Choose your City</option>
                            <option value="karachi">Karachi</option>
                            <option value="islamabad">Islamabad</option>
                            <option value="lahore">Lahore</option>
                            <option value="SA">San Francisco</option>
                            <option value="NY">New York</option>
                            <option value="LA">Los Angeles</option>
                            <option value="CH">Chicago</option>
                            <option value="HU">Houston</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="phone-input-3"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Phone Number*
                          </label>
                          <div className="flex items-center">
                            <div className="z-10 inline-flex gap-2 shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <img src={PKFLAG} className="w-5" alt="" />
                              +92
                            </div>

                            <div className="relative w-full">
                              <input
                                type="text"
                                id="phone-input"
                                className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="3XX-XXXXXXX"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Email*
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="name@flowbite.com"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company_name"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your address
                          </label>
                          <input
                            type="text"
                            id="company_name"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="your address"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="vat_number"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            WhatsApp No
                          </label>
                          <input
                            type="text"
                            id="vat_number"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="+92300-0000000"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {steps == "payment" && (
                  <div className="min-w-0 flex-1 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Payment Details
                      </h2>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="your_name"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Card Holder Name
                          </label>
                          <input
                            type="text"
                            id="your_name"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Bonnie Green"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="card_number"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Card Number*
                          </label>
                          <input
                            type="text"
                            id="card_number"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="555-555-555-555"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="card_number"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Expiration Date*
                          </label>
                          <input
                            type="month"
                            id="card_number"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="555-555-555-555"
                            required={true}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="card_number"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Security Code (CVV)*
                          </label>
                          <input
                            type="text"
                            id="card_number"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="000"
                            required=""
                            maxLength={3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {steps == "orderSummary" && (
                  <div className="min-w-0 flex-1 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Successfully Place Order
                      </h2>
                      <h1>Thank You for Shopping</h1>
                      <h1>Your Order # 42455400003223</h1>
                    </div>
                  </div>
                )}
                <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                  <div className="flow-root">
                    <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Subtotal
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $ {Math.round(subAmount)}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Sales Tax
                        </dt>
                        <dd className="text-base font-medium text-green-500">
                          $ {Math.round(salesTax)}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Discount
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $ {Math.round(discount)}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Shipping Charges
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $ {Math.round(shippingCharges)}
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">
                          Grand Total
                        </dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">
                          $ {Math.round(grandTotal)}
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button
                      onClick={() =>
                        setSteps(
                          steps == "checkout"
                            ? "payment"
                            : steps == "payment"
                            ? "orderSummary"
                            : "checkout"
                        )
                      }
                      className="w-full"
                    >
                        {steps == "payment" ? "Order Place" : steps == "orderSummary" ? "Continue Shopping" : "Next"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Checkout;
