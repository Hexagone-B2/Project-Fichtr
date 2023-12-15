export default function PrivateMessageInput(){
    
    function setMessage(message){
        localStorage.setItem("message", message);
    }

    function handleClick(){
        console.log(localStorage.getItem("message"));
    }

    return (

        <form>
            <label for="chat" className="sr-only">Your message</label>
            <div className="flex justify-between fixed items-center bottom-0 px-3 py-2 rounded-lg bg-gray-50">
                <textarea id="chat" onChange={(e) => setMessage(e.target.value)} rows="1" cols="150" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
                <button type="submit" onClick={handleClick} class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
                    <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span className="sr-only">Send message</span>
                </button>
            </div>
        </form>

    );
}