"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const shops = [
  {
    name: "All Supplements",
    href: "#",
  },
  {
    name: "Best Sellers",
    href: "#",
  },
  {
    name: "Immune System",
    href: "#",
  },
  {
    name: "Daily Detox",
    href: "#",
  },
  {
    name: "Everyday Nutrition",
    href: "#",
  },
  {
    name: "Greens",
    href: "#",
  },
  {
    name: "Energy",
    href: "#",
  },
  {
    name: "Heart",
    href: "#",
  },
  {
    name: "Joints",
    href: "#",
  },
  {
    name: "Metabolism",
    href: "#",
  },
  {
    name: "Protein",
    href: "#",
  },
  {
    name: "Product Packs",
    href: "#",
  },
  {
    name: "USDA Organic",
    href: "#",
  },
  {
    name: "Vegan",
    href: "#",
  },
  {
    name: "Vitamin D",
    href: "#",
  },
  {
    name: "Zeolite",
    href: "#",
  },
];

const collaborate = [
  {
    name: "Collaborate",
    href: "#",
  },
  {
    name: "Visionary Business Owner",
    href: "#",
  },
  {
    name: "Affiliate",
    href: "#",
  },
  {
    name: "Brand Ambassador",
    href: "#",
  },
  {
    name: "Touchstone Essentials Live",
    href: "#",
  },
];
const community = [
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Good inside gear",
    href: "#",
  },
  {
    name: "Good rewards",
    href: "#",
  },
  {
    name: "Experts",
    href: "#",
  },
  {
    name: "Reviews",
    href: "#",
  },
];

const countries = [
  {
    name: "Australia (AUD)",
    href: "#",
  },
  {
    name: "Austria (USD)",
    href: "#",
  },
  {
    name: "Belgium (USD)",
    href: "#",
  },
  {
    name: "Bulgaria (USD)",
    href: "#",
  },
  {
    name: "Canada (CAD)",
    href: "#",
  },
  {
    name: "Canary Islands (USD)",
    href: "#",
  },
  {
    name: "Chile (USD)",
    href: "#",
  },
  {
    name: "Costa Rica (USD)",
    href: "#",
  },
  {
    name: "Croatia (USD)",
    href: "#",
  },
  {
    name: "Cyprus (USD)",
    href: "#",
  },
  {
    name: "Czech Republic (USD)",
    href: "#",
  },
  {
    name: "Denmark (USD)",
    href: "#",
  },
  {
    name: "Estonia (USD)",
    href: "#",
  },
  {
    name: "Finland (USD)",
    href: "#",
  },
  {
    name: "France (USD)",
    href: "#",
  },
  {
    name: "Germany (USD)",
    href: "#",
  },
  {
    name: "Greece (USD)",
    href: "#",
  },
  {
    name: "Hong Kong (USD)",
    href: "#",
  },
  {
    name: "Hungary (USD)",
    href: "#",
  },
  {
    name: "Ireland (USD)",
    href: "#",
  },
  {
    name: "Italy (USD)",
    href: "#",
  },
  {
    name: "Japan (USD)",
    href: "#",
  },
  {
    name: "Latvia (USD)",
    href: "#",
  },
  {
    name: "Lithuania (USD)",
    href: "#",
  },
  {
    name: "Luxembourg (USD)",
    href: "#",
  },
  {
    name: "Malaysia (USD)",
    href: "#",
  },
  {
    name: "Malta (USD)",
    href: "#",
  },
  {
    name: "Mexico (USD)",
    href: "#",
  },
  {
    name: "Monaco (USD)",
    href: "#",
  },
  {
    name: "Netherlands (USD)",
    href: "#",
  },
  {
    name: "New Zealand (USD)",
    href: "#",
  },
  {
    name: "Norway (USD)",
    href: "#",
  },
  {
    name: "Panama (USD)",
    href: "#",
  },
  {
    name: "Philippines (USD)",
    href: "#",
  },
  {
    name: "Poland (USD)",
    href: "#",
  },
  {
    name: "Portugal (USD)",
    href: "#",
  },
  {
    name: "Romania (USD)",
    href: "#",
  },
  {
    name: "Singapore (USD)",
    href: "#",
  },
  {
    name: "Slovakia (USD)",
    href: "#",
  },
  {
    name: "Slovenia (USD)",
    href: "#",
  },
  {
    name: "South Korea (USD)",
    href: "#",
  },
  {
    name: "Spain (USD)",
    href: "#",
  },
  {
    name: "Sweden (USD)",
    href: "#",
  },
  {
    name: "Switzerland (USD)",
    href: "#",
  },
  {
    name: "Taiwan (USD)",
    href: "#",
  },
  {
    name: "United Kingdom (GBP)",
    href: "#",
  },
  {
    name: "United States (USD)",
    href: "#",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  return (
    <>
      <div className="relative bg-green-500">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-gray-100 py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <p className="text-white font-medium">
                FREE shipping on any order with Pure Body Extra!
              </p>
            </div>

            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <button className="text-white font-medium border-2 px-1">
                JOIN US! (VBO)
              </button>

              <Popover className="">
                {({ open }) => (
                  <>
                    <Popover.Button className="text-white group inline-flex items-center text-base focus:outline-none">
                      <span>United State (USD)</span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-2 w-screen left-0">
                        <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative bg-white grid grid-cols-6 gap-4 px-20 py-5">
                            {countries.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <div className="">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </div>
      <Popover className="relative bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-gray-100 py-5 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="" />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="bg-orange-500 text-white px-3 group inline-flex items-center text-base font-medium focus:outline-none">
                      <span>SHOP</span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-56 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-3 bg-white p-3 sm:gap-3 sm:p-3">
                            {shops.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <div className="">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="bg-black text-white group inline-flex items-center text-base font-medium focus:outline-none">
                      <span>Collaborate</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-56 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-3 bg-white p-3 sm:gap-3 sm:p-3">
                            {collaborate.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <div className="">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="bg-black text-white group inline-flex items-center text-base font-medium focus:outline-none">
                      <span>Community</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-56 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-3 bg-white p-3 sm:gap-3 sm:p-3">
                            {community.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <div className="">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="bg-black text-white group inline-flex items-center text-base font-medium focus:outline-none">
                      <span>Why touchstone</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-56 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-3 bg-white p-3 sm:gap-3 sm:p-3">
                            <a
                              href="#"
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="">
                                <p className="text-base font-medium text-gray-900">
                                  Why touchstone
                                </p>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="">
                                <p className="text-base font-medium text-gray-900">
                                  About us
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a href="#" className="bg-black text-white">
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/logom.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {shops.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}

export default Header;
