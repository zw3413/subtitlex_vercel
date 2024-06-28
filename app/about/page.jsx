export default function Home() {
  return (
    <div className="container mt-10 max-w-4xl">
      <div className="text-4xl font-bold mb-5">
        Subtitlex is a gateway to subtitles in multiple languages, serving online video platforms.
      </div>

      <div className="text-lg leading-relaxed mx-auto p-4 rounded shadow-lg mb-5">
        Subtitlex offers a comprehensive platform for subtitles, including:
        <ul className="list-disc list-inside ml-8 text-base font-bold">
          <li>A massive library of thousands of subtitled videos from popular platforms</li>
          <li>Anonymized community sharing: Contribute to expanding accessibility without compromising your privacy</li>
          <li>We utilize state-of-the-art technology to generate new subtitles using GPU and fast-whisper models, focusing on popular content.</li>
        </ul>
      </div>

      <div className="text-lg leading-relaxed mx-auto p-4 rounded shadow-lg mb-5">
        Subtitlex provides:
        <ul className="list-disc list-inside ml-8 text-base font-bold">
          <li>A massive, growing library of subtitled JAVs with thousands of videos already available and more added regularly</li>
          <li>Community-driven: Contribute to expanding accessibility for others while keeping your privacy intact</li>
          <li>Quality assurance through diverse sources (user contributions, generated subtitles, and online collections)</li>
          <li>User-friendly interface for easy subtitle browsing, loading, and customization</li>
          <li>We respect your browsing habits.</li>
          <li>We never track your video preferences.</li>
        </ul>
      </div>
    </div>
  );
}
