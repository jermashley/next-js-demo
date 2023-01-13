'use client'

import { faPaintbrushPencil } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from '@headlessui/react'
import { useLocalStorage } from '@mantine/hooks'

export const Navigation = () => {
  const [themeClass, setThemeClass] = useLocalStorage({
    key: `themeClass`,
    defaultValue: `no-theme`,
  })

  return (
    <nav
      className={`flex w-full flex-row items-center justify-between px-12 py-4 ${
        themeClass ?? ``
      }`}
    >
      <h1 className="text-sm font-semibold uppercase">Company Name</h1>

      <div>
        <Menu as="div" className="relative w-auto">
          <div>
            <Menu.Button
              className={`flex flex-row items-center justify-center space-x-4 rounded-md bg-slate-800 px-4 py-2 dark:bg-slate-700`}
            >
              <span className="text-xs font-semibold uppercase text-slate-800 dark:text-slate-300">
                Theme
              </span>

              <FontAwesomeIcon
                className="text-center text-sm text-slate-800 dark:text-slate-300"
                icon={faPaintbrushPencil}
                fixedWidth
              />
            </Menu.Button>
          </div>

          <Menu.Items className="absolute top-full right-0 mt-2 w-full rounded-md bg-slate-800 px-1 py-2 dark:bg-slate-700">
            <div className="flex w-full flex-col space-y-1">
              <Menu.Item>
                <button
                  className="flex w-full flex-row items-center justify-between rounded-md bg-transparent py-1 px-2 text-left text-xs uppercase text-slate-800 transition-all duration-200 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/5"
                  onClick={() => setThemeClass(() => `theme-1`)}
                >
                  <span>Theme 1</span>

                  <span className="theme-1 block h-2 w-2 rounded-full" />
                </button>
              </Menu.Item>

              <Menu.Item>
                <button
                  className="flex w-full flex-row items-center justify-between rounded-md bg-transparent py-1 px-2 text-left text-xs uppercase text-slate-800 transition-all duration-200 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/5"
                  onClick={() => setThemeClass(() => `theme-2`)}
                >
                  <span>Theme 2</span>

                  <span className="theme-2 block h-2 w-2 rounded-full" />
                </button>
              </Menu.Item>

              <Menu.Item>
                <button
                  className="flex w-full flex-row items-center justify-between rounded-md bg-transparent py-1 px-2 text-left text-xs uppercase text-slate-800 transition-all duration-200 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/5"
                  onClick={() => setThemeClass(() => `theme-3`)}
                >
                  <span>Theme 3</span>

                  <span className="theme-3 block h-2 w-2 rounded-full" />
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  )
}
