function Footer() {
  return (
    <footer className="mt-10 flex items-center border-t border-t-[#000] py-4 md:h-24">
      <div className="mx-auto flex w-full max-w-7xl justify-between px-4">
        <p className="text-text-gray">Copyright © 2024 GemsDAO</p>
        <ul className="flex items-center gap-x-4">
          <li className="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#9C9C9C"
                fillRule="evenodd"
                d="M8.077 20c7.246 0 11.438-5.626 11.438-10.965 0-.147 1.03-1.03 1.47-2.874a.441.441 0 0 0-.616-.512c-.88.404-1.773.084-2.161-.376a3.874 3.874 0 0 0-5.574-.175 4.112 4.112 0 0 0-1.14 3.86c-3.351.24-5.652-1.349-7.544-3.526-.244-.283-.697-.134-.748.24-.28 2.082-.368 7.144 4.648 10.051-.871 1.252-2.576 1.991-4.474 2.308-.42.071-.52.653-.136.841a10.923 10.923 0 0 0 4.837 1.125"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="h-6 w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#9C9C9C"
                fillRule="evenodd"
                d="M3 5.25a2.25 2.25 0 1 1 4.502.002A2.25 2.25 0 0 1 3 5.25ZM15.15 8.4c-3.23 0-5.85 2.604-5.85 5.814V20.1c0 .497.404.901.9.901h2.1a.902.902 0 0 0 .9-.9v-5.886c0-1.136.985-2.044 2.153-1.927 1.014.101 1.747 1.028 1.747 2.047V20.1c0 .497.404.901.9.901h2.1a.902.902 0 0 0 .9-.9v-5.886c0-3.21-2.62-5.814-5.85-5.814Zm-8.55.9H3.901a.9.9 0 0 0-.901.9v9.9a.9.9 0 0 0 .901.9H6.6a.9.9 0 0 0 .9-.9v-9.9a.9.9 0 0 0-.9-.9Z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
