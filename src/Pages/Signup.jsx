import HomeLayout from "../Layouts/HomeLayout";


export default function Signup() {
  return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh] w-full">

                <form className="flex flex-column justify-center gap-3 rounded-lg p-4 text-white w-80 shadow-[1_1_10px_black]">
                    <h1 className="text-center text-3xl font-mono">Registration page</h1>
                </form>
            </div>


        </HomeLayout>
  )
}
