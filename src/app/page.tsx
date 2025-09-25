export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
      {/* Header */}
      <header className="w-full text-center py-32">
        <h1 className="text-4xl font-bold">STUDIO HWI</h1>
      </header>

      {/* Introduction */}
      <section className="max-w-2xl text-center mb-16">
        <p>
          웹/앱 개발, 디자인 등 다양한 분야에서 창의적인 것을 제공합니다.
          <br />
          작은 아이디어를 큰 가치로 성장시키는 것을 목표로 합니다.
        </p>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4">웹 개발</h3>
            <p>
              아이디어를 현실로 만드는 반응형 웹사이트와 웹 애플리케이션을
              제작합니다.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4">앱 개발</h3>
            <p>
              iOS 및 Android 크로스플랫폼
              <br />
              애플리케이션을 개발합니다.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-4">Creative Goods</h3>
            <p>
              귀여운 소품과 생활 속에서
              <br />
              즐거운 디자인 제품들을 선보입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img
              src="/ggbb.png"
              alt="Project 1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">가계부부</h3>
                <p className="text-sm text-gray-600">함께 쓰는 공유 가계부</p>
              </div>
              <div>
                <a
                  href="https://litt.ly/ggbb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  앱 다운로드
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            {/* <img
              src="/ggbb.png"
              alt="Project 1"
              className="w-full h-40 object-cover"
            /> */}
            <div className="p-4">
              <h3 className="text-lg font-bold">Coming Soon</h3>
              <p className="text-sm text-gray-600"></p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            {/* <img
              src="/ggbb.png"
              alt="Project 1"
              className="w-full h-40 object-cover"
            /> */}
            <div className="p-4">
              <h3 className="text-lg font-bold">Coming Soon</h3>
              <p className="text-sm text-gray-600"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: studio.hwi.app@gmail.com</p>
      </section>

      <footer className="text-sm text-gray-500 py-12">
        © {new Date().getFullYear()} STUDIO HWI. All rights reserved.
      </footer>
    </main>
  );
}
