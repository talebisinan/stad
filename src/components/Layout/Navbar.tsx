import React, { Fragment, ReactElement } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigation, profile } from "./routes";
import classNames from "../../utils/classNames";

export default function Navbar(): ReactElement {
  const router = useRouter();
  const currentPath = router?.asPath;
  const [currentNavItem] =
    navigation.filter((n) => n.path === router?.asPath) || [];

  return (
    <div className="bg-green-600 pb-32">
      <Disclosure
        as="nav"
        className="bg-green-600 border-b border-green-300 border-opacity-25 lg:border-none"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-green-400 lg:border-opacity-25">
                <div className="px-2 flex items-center lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      className="block h-8 w-8"
                      src="/logo.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden lg:block lg:ml-10">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link href={item.path} key={item.path}>
                          <a
                            className={classNames(
                              item.path === currentPath
                                ? "bg-green-700"
                                : "hover:bg-green-500 hover:bg-opacity-75 ",
                              "flex text-white rounded-md py-2 px-3 text-sm font-medium"
                            )}
                          >
                            {item.icon && (
                              <item.icon
                                className="mr-3 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-gray-400 focus-within:text-gray-600">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white focus:border-white sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-green-600 p-2 rounded-md inline-flex items-center justify-center text-green-200 hover:text-white hover:bg-green-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:block lg:ml-4">
                  <div className="flex items-center">
                    <button className="bg-green-600 flex-shrink-0 rounded-full p-1 text-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative flex-shrink-0">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="bg-green-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="rounded-full h-8 w-8"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              {profile.map((item) => (
                                <Menu.Item key={item.path}>
                                  {({ active }) => (
                                    <Link href={item.path}>
                                      <a
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block py-2 px-4 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item.path}>
                      {/* Current: "bg-green-700 text-white", Default: "text-white hover:bg-green-500 hover:bg-opacity-75" */}
                      <Link href={item.path} key={item.path}>
                        <a className="bg-green-700 text-white block rounded-md py-2 px-3 text-base font-medium">
                          {item.name}
                        </a>
                      </Link>
                    </Fragment>
                  ) : (
                    <Link href={item.path} key={item.path}>
                      <a className="text-white hover:bg-green-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                        {item.name}
                      </a>
                    </Link>
                  )
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-green-700">
                <div className="px-5 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full h-10 w-10"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium text-green-300">
                      tom@example.com
                    </div>
                  </div>
                  <button className="ml-auto bg-green-600 flex-shrink-0 rounded-full p-1 text-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {profile.map((item) => (
                    <Link href={item.path} key={item.path}>
                      <a className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-green-500 hover:bg-opacity-75">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <header className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">
            {currentNavItem?.name}
          </h1>
        </div>
      </header>
    </div>
  );
}
