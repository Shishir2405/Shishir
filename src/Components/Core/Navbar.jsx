import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  
  const navigation = [
    { name: "ABOUT ME", href: "#about", current: true },
    { name: "PORTFOLIO", href: "#", current: false },
    { name: "SKILLS", href: "#", current: false },
    { name: "SERVICES", href: "#", current: false },
    { name: "TESTIMONIALS", href: "#", current: false },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  export default function Navbar() {
    return (
      <Disclosure as="nav">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="fixed right-0 left-0 top-0 flex h-16 items-center justify-center px-16">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            {/* Left side: Name */}
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <span className="text-xs font-semibold">SHISHIR</span>
              </div>
            </div>
            {/* Center: Navigation Links (for larger screens, centered) */}
            <div className="hidden sm:flex sm:flex-1 sm:justify-center">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className="text-xs text-white/60 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            {/* Right side: Button (only visible in desktop view) */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="border border-white bg-white text-black px-4 py-2 rounded-full text-xs hidden sm:block">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Navigation (including Get in Touch button) */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            {/* Get in Touch button inside the mobile menu */}
            <DisclosureButton className="block w-full px-4 py-2 text-xs text-center text-white bg-black rounded-full mt-4">
              GET IN TOUCH
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    );
  }
  