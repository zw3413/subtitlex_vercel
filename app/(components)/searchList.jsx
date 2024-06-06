export default function SearchList({seeds,setSeed, setIsDetail}) {

  return (
    <div>
        <table className="text-sm text-left rtl:text-right text-gray-400 ">
            <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 w-[150px]">
                  Language
                </th>
                <th scope="col" className="px-6 py-3 w-[750px]">
                  Video Name
                </th>
                <th scope="col" className="px-6 py-3 w-[100px]">
                  Format
                </th>
              </tr>
            </thead>
            <tbody>
              {seeds.map((seed, index) => {
                return (
                  <tr
                    key={seed.uuid}
                    className="bg-gray-800 border-gray-700 hover:bg-gray-600"
                    onClick={() => {setSeed(seed); setIsDetail(true)}}
                  >
                    <td className="px-6 py-4 w-[150px]">{seed.language}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium   text-white "
                    >
                      {seed.video_name}
                    </th>
                    <td className="px-6 py-4 w-[100px]">{seed.format}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
    </div>
  );
}