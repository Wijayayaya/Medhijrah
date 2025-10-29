// Combined FAQ and AI Chat System
let faqData = {
    Umum: {
        "Apa itu MedHijrah?":
            "MedHijrah adalah website yang menyediakan informasi lengkap mengenai layanan kesehatan dan destinasi wisata di Yogyakarta, khusus untuk wisatawan medical tourism.",
        "Apa tujuan dari MedHijrah?":
            "Untuk menghubungkan wisatawan dengan layanan kesehatan berkualitas serta destinasi wisata di Yogyakarta.",
        "Siapa saja yang bisa menggunakan MedHijrah?":
            "Wisatawan lokal maupun mancanegara.",
        "Apakah MedHijrah bekerja sama dengan rumah sakit resmi?":
            "Belum, untuk sekarang kami hanya menyediakan informasi dan belum bekerja sama langsung dengan rumah sakit dan klinik terakreditasi di Yogyakarta.",
        "Apa manfaat menggunakan MedHijrah?":
            "Memudahkan Anda dalam mencari layanan kesehatan dan wisata dalam satu platform terpadu.",
        "Apakah MedHijrah aman digunakan?":
            "Ya, data pengguna dilindungi dengan enkripsi dan sistem keamanan untuk menjaga privasi Anda.",
        "Apakah MedHijrah punya layanan 24 jam?":
            "Website dapat diakses 24 jam. Fitur live chat juga tersedia selama jam operasional.",
        "Bagaimana cara menggunakan MedHijrah?":
            "Cukup buka website kami, lalu pilih fitur yang Anda butuhkan, seperti Medical Care, Paket Wisata, dan lainnya.",
        "Siapa pengelola MedHijrah?":
            "MedHijrah dikelola oleh tim profesional dengan dukungan dari para pemangku kepentingan di sektor kesehatan dan pariwisata Yogyakarta.",
        "Apakah MedHijrah bisa dipakai oleh agen perjalanan?":
            "Tentu saja. Kami membuka peluang kolaborasi untuk agen perjalanan dan penyedia layanan kesehatan.",
    },
    "Medical Care": {
        "Apa itu fitur Medical Care?":
            "Fitur ini menyediakan informasi lengkap mengenai dokter, spesialisasi, jadwal, dan layanan di berbagai rumah sakit di Yogyakarta.",
        "Apa saja spesialisasi dokter di MedHijrah?":
            "Kami menyediakan informasi untuk berbagai spesialisasi, seperti Kardiologi, Gigi, Kulit, THT, Bedah Plastik, dan masih banyak lagi.",
        "Apakah bisa mencari dokter berdasarkan spesialisasi?":
            "Ya, Anda dapat menggunakan filter pencarian untuk menemukan dokter berdasarkan spesialisasi yang Anda butuhkan.",
        "Apa layanan unggulan rumah sakit di Jogja?":
            "Setiap rumah sakit memiliki keunggulannya masing-masing. Informasi detail tersedia di profil setiap rumah sakit.",
        "Apakah tersedia informasi jadwal dokter?":
            "Ya, informasi jadwal praktik dokter tersedia di setiap profil rumah sakit atau klinik.",
        "Apakah ada layanan untuk perawatan ibu dan anak?":
            "Tersedia. Kami menyediakan informasi layanan seperti kandungan, kebidanan, dan kesehatan anak-anak.",
        "Apakah MedHijrah memberikan informasi rawat inap?":
            "Ya, kami menyediakan informasi lengkap mengenai fasilitas kamar rawat inap beserta estimasi tarifnya.",
        "Bagaimana saya memilih rumah sakit yang sesuai?":
            "Anda bisa menggunakan filter kami untuk membandingkan rumah sakit berdasarkan spesialisasi, lokasi, dan perkiraan biaya.",
        "Apakah tersedia info tenaga medis berlisensi?":
            "Ya, semua tenaga medis yang informasinya kami tampilkan adalah profesional berlisensi.",
        "Bagaimana jika saya butuh layanan gawat darurat?":
            "Informasi mengenai Instalasi Gawat Darurat (IGD) yang beroperasi 24 jam tersedia di fitur Medical Points.",
    },
    "Medical Points": {
        "Apa itu fitur Medical Points?":
            "Fitur ini membantu Anda menemukan lokasi fasilitas medis, seperti klinik atau apotek, yang terdekat dari area wisata populer.",
        "Di mana klinik terdekat dari Malioboro?":
            "Terdapat beberapa klinik dan apotek 24 jam yang lokasinya sangat dekat dan mudah dijangkau dari area Malioboro.",
        "Fasilitas medis di sekitar Kraton Yogyakarta?":
            "Di sekitar Kraton, tersedia klinik umum dan apotek yang buka hingga malam hari untuk kebutuhan medis Anda.",
        "Rumah sakit dekat Prambanan apa?":
            "Salah satu yang terdekat adalah RS Nur Hidayah, yang berjarak sekitar 6 km dari Candi Prambanan.",
        "Rumah sakit dekat Parangtritis?":
            "RSUP Dr. Sardjito adalah salah satu rumah sakit besar yang berjarak sekitar 27 km dari pantai Parangtritis.",
        "Apakah ada peta lokasi di MedHijrah?":
            "Ya, kami menyediakan peta interaktif untuk setiap fasilitas medis agar Anda mudah menemukan lokasinya.",
        "Bagaimana akses transportasi ke rumah sakit?":
            "Informasi mengenai transportasi umum dan taksi online tersedia di halaman detail setiap rumah sakit.",
        "Apakah ada klinik dekat Museum Affandi?":
            "Ya, ada beberapa klinik pratama dan apotek yang lokasinya tidak jauh dari Museum Affandi.",
        "Apakah tersedia ambulans dalam MedHijrah?":
            "Kami tidak menyediakan layanan ambulans secara langsung, tetapi beberapa rumah sakit mencantumkan kontak layanan ambulans mereka.",
        "Apakah MedHijrah mencantumkan jam operasional fasilitas medis?":
            "Ya, setiap profil fasilitas medis mencantumkan jam operasional mereka secara jelas.",
    },
    "Medical Cost": {
        "Apa itu fitur Medical Cost?":
            "Fitur ini memberikan estimasi biaya untuk berbagai layanan medis di Yogyakarta agar Anda bisa merencanakan anggaran.",
        "Berapa biaya pemeriksaan umum?":
            "Estimasi biaya pemeriksaan umum berkisar antara Rp100.000 hingga Rp300.000.",
        "Biaya perawatan gigi di MedHijrah?":
            "Tergantung jenis perawatannya, biayanya bisa berkisar dari Rp500.000 hingga Rp2.000.000.",
        "Apakah biaya medical check-up tersedia?":
            "Ya, kami menyediakan informasi paket medical check-up dengan harga mulai dari Rp1.000.000.",
        "Bisa bandingkan biaya antar rumah sakit?":
            "Ya, fitur Medical Cost memungkinkan Anda membandingkan estimasi biaya layanan di beberapa rumah sakit.",
        "Biaya perawatan kecantikan di Jogja?":
            "Biaya perawatan kecantikan bervariasi, biasanya dimulai dari Rp300.000 tergantung jenis perawatannya.",
        "Apakah biaya termasuk obat?":
            "Ini tergantung pada kebijakan masing-masing fasilitas. Informasi lengkap biasanya dicantumkan di detail layanan.",
        "Bagaimana cara estimasi biaya?":
            "Anda dapat menggunakan fitur simulasi biaya kami dengan memasukkan jenis layanan dan rumah sakit yang Anda inginkan.",
        "Biaya operasi ringan di MedHijrah?":
            "Estimasi biaya untuk operasi ringan dimulai dari Rp2.000.000, tergantung pada jenis tindakan medisnya.",
        "Biaya pengobatan tradisional seperti bekam?":
            "Untuk pengobatan tradisional seperti bekam, biayanya berkisar antara Rp100.000 hingga Rp300.000.",
    },
    "Hospital and Medical Centers": {
        "Apa itu fitur Hospital and Medical Centers?":
            "Fitur ini menampilkan profil lengkap rumah sakit dan pusat kesehatan terkemuka di Yogyakarta.",
        "Rumah sakit unggulan di Jogja?":
            "Beberapa rumah sakit unggulan antara lain RSUP Dr. Sardjito, RS Bethesda, dan RSUD Panembahan Senopati.",
        "Info fasilitas tiap rumah sakit?":
            "Tentu, informasi fasilitas seperti ICU, unit rawat inap, dan laboratorium tersedia di halaman profil setiap rumah sakit.",
        "Jadwal praktik dokter bisa dilihat?":
            "Ya, jadwal praktik dokter tersedia dan diperbarui secara berkala di halaman masing-masing rumah sakit.",
        "Apakah rumah sakit memiliki akreditasi?":
            "Ya, semua rumah sakit yang terdaftar di MedHijrah telah memiliki sertifikasi dan akreditasi nasional.",
        "Bisa konsultasi langsung lewat MedHijrah?":
            "Anda bisa memulai percakapan melalui live chat atau menggunakan form konsultasi yang tersedia.",
        "Apakah rumah sakit terhubung dengan asuransi?":
            "Beberapa rumah sakit telah bekerja sama dengan penyedia asuransi tertentu. Detailnya ada di profil rumah sakit.",
        "Ada fasilitas untuk wisatawan asing?":
            "Banyak rumah sakit di Yogyakarta yang sudah dilengkapi dengan layanan internasional untuk kenyamanan wisatawan asing.",
        "Fasilitas apa yang tersedia untuk pasien difabel?":
            "Beberapa rumah sakit menyediakan fasilitas ramah difabel seperti lift, kursi roda, dan toilet aksesibel.",
        "Apakah saya bisa memilih dokter sendiri?":
            "Tentu, Anda dapat memilih dokter dari daftar yang tersedia di rumah sakit pilihan Anda.",
    },
    "Pengobatan Tradisional": {
        "Apa itu fitur Alternative and Traditional Medicine?":
            "Fitur ini menyediakan informasi mengenai pengobatan tradisional khas Yogyakarta seperti jamu, bekam, pijat, dan lainnya.",
        "Pengobatan tradisional apa saja di Jogja?":
            "Ada banyak jenisnya, termasuk Pijat Jawa, kerokan, bekam, dan ramuan jamu herbal.",
        "Siapa saja praktisi jamu di Jogja?":
            "Kami menyediakan daftar praktisi jamu yang bersertifikat dan terpercaya di Yogyakarta.",
        "Pengobatan tradisional aman nggak?":
            "MedHijrah hanya mencantumkan informasi praktisi atau layanan yang memiliki izin resmi untuk menjamin keamanan Anda.",
        "Apakah bisa booking pengobatan tradisional?":
            "Saat ini kami belum menyediakan fitur booking, namun kami menyediakan informasi lokasi dan nomor kontak yang dapat dihubungi.",
        "Apakah jamu tersedia dalam paket?":
            "Beberapa penyedia menawarkan paket jamu atau kelas meracik jamu sebagai bagian dari wisata kesehatan.",
        "Bisakah saya melihat ulasan pengguna tentang layanan alternatif?":
            "Ya, pengguna dapat membaca dan memberikan ulasan terkait pengalaman mereka menggunakan layanan pengobatan alternatif.",
    },
};

let currentFaqState = "welcome"; // welcome -> categories -> questions -> answer
let currentCategory = null;

// Initialize AI messages for context
window.aiMessages = [
    {
        role: "system",
        content:
            "Anda adalah asisten AI untuk MedHijrah, sebuah website yang menyediakan informasi lengkap mengenai layanan kesehatan dan destinasi wisata di Yogyakarta untuk wisatawan medical tourism. Berikan informasi yang akurat, sopan, dan ramah. Jika pengguna bertanya tentang hal yang tidak terkait dengan MedHijrah atau medical tourism di Yogyakarta, arahkan mereka kembali ke topik yang relevan.",
    },
];

function initializeFaqAiChat() {
    // Clear chat body
    const chatBody = document.getElementById("chatBody");
    chatBody.innerHTML = "";

    // Reset state
    currentFaqState = "welcome";
    currentCategory = null;

    // Welcome message
    addMessage("bot", "Selamat datang di MedHijrah FAQ & AI Assistant! 🤖");
    addMessage("bot", "Saya dapat membantu Anda dengan dua cara:");
    addMessage(
        "bot",
        "<strong>1. Pilih dari Kategori FAQ</strong> untuk menemukan jawaban cepat."
    );
    addMessage(
        "bot",
        "<strong>2. Ketik pertanyaan langsung</strong> dan saya akan menjawab menggunakan AI."
    );

    // Display categories
    displayCategories();
}

function displayCategories() {
    const categories = Object.keys(faqData);
    let categoriesHtml =
        '<div style="margin-top: 15px;"><strong>📋 Kategori FAQ:</strong></div>';
    categoriesHtml += '<ul class="category-list">';

    categories.forEach((category) => {
        categoriesHtml += `<li class="category-item" onclick="selectCategory('${category}')">${category}</li>`;
    });

    categoriesHtml += "</ul>";
    categoriesHtml +=
        '<div style="margin-top: 10px; font-size: 13px; color: #666; text-align: center;">Atau ketik pertanyaan Anda langsung di bawah ini 👇</div>';

    addMessage("bot", categoriesHtml);
}

function selectCategory(category) {
    // Clear previous questions if any, by re-initializing the welcome message part.
    const chatBody = document.getElementById("chatBody");
    // This is a simple way to 'clear' the view. For a better UX, you might want to hide/show elements.
    // For this fix, we'll just add messages anew.

    currentCategory = category;
    currentFaqState = "questions";

    // Display user's choice
    addMessage("user", `Saya ingin tahu tentang: ${category}`);

    // Display questions for the category
    const questions = Object.keys(faqData[category]);
    let questionsHtml =
        '<div class="back-button" onclick="goBackToCategories()">← Kembali ke Kategori</div>';
    questionsHtml += '<ul class="question-list">';

    questions.forEach((question) => {
        questionsHtml += `<li class="question-item" onclick="selectQuestion('${question.replace(
            /'/g,
            "\\'"
        )}')">${question}</li>`;
    });

    questionsHtml += "</ul>";
    addMessage("bot", `Silakan pilih pertanyaan tentang ${category}:`);
    addMessage("bot", questionsHtml);
}

function selectQuestion(question) {
    currentFaqState = "answer";

    // Display question
    addMessage("user", question);

    // Get and display answer
    const answer = faqData[currentCategory][question];

    // Show typing indicator
    showTypingIndicator();

    // Simulate typing delay
    setTimeout(() => {
        hideTypingIndicator();
        addMessage("bot", `📋 <strong>FAQ:</strong> ${answer}`);

        // Show option to ask another question
        let backHtml =
            '<div class="back-button" onclick="goBackToQuestions()">← Pertanyaan Lain di Kategori Ini</div>';
        backHtml +=
            '<div class="back-button" onclick="goBackToCategories()">← Lihat Semua Kategori</div>';
        addMessage("bot", backHtml);
    }, 1000);
}

function goBackToCategories() {
    currentFaqState = "categories";
    currentCategory = null;

    // We can just re-display the categories.
    addMessage("bot", "Silakan pilih kategori lain dari daftar berikut:");
    displayCategories();
}

function goBackToQuestions() {
    currentFaqState = "questions";

    // To avoid re-printing the user message, we directly display the questions again.
    const questions = Object.keys(faqData[currentCategory]);
    let questionsHtml =
        '<div class="back-button" onclick="goBackToCategories()">← Kembali ke Kategori</div>';
    questionsHtml += '<ul class="question-list">';

    questions.forEach((question) => {
        questionsHtml += `<li class="question-item" onclick="selectQuestion('${question.replace(
            /'/g,
            "\\'"
        )}')">${question}</li>`;
    });

    questionsHtml += "</ul>";
    addMessage(
        "bot",
        `Silakan pilih pertanyaan lain tentang ${currentCategory}:`
    );
    addMessage("bot", questionsHtml);
}

async function handleFaqAiMessage(message) {
    // Add user message to chat
    addMessage("user", message);

    // First, try to find exact or partial match in FAQ data
    let faqFound = false;
    const lowerCaseMessage = message.toLowerCase();

    for (const category in faqData) {
        for (const question in faqData[category]) {
            if (
                question.toLowerCase().includes(lowerCaseMessage) ||
                lowerCaseMessage.includes(
                    question.toLowerCase().substring(0, 15)
                ) // Check for partial match
            ) {
                // Found a FAQ match
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    addMessage(
                        "bot",
                        `📋 <strong>FAQ:</strong> ${faqData[category][question]}`
                    );

                    // Show option to go back
                    let backHtml =
                        '<div class="back-button" onclick="goBackToCategories()">← Lihat Kategori FAQ</div>';
                    addMessage("bot", backHtml);
                }, 1000);
                faqFound = true;
                return;
            }
        }
    }

    // If no FAQ match found, use AI
    if (!faqFound) {
        // Add message to AI history for context
        window.aiMessages.push({
            role: "user",
            content: message,
        });

        // Show typing indicator
        showTypingIndicator();

        // Disable input while processing
        setInputState(true);

        try {
            const res = await fetch(
                "https://openrouter.ai/api/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        Authorization:
                            "Bearer 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",
                        "HTTP-Referer": window.location.href, // Recommended by OpenRouter
                        "X-Title": "MedHijrah", // Recommended by OpenRouter
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        model: "deepseek/deepseek-chat", // Using a standard chat model
                        messages: window.aiMessages,
                        temperature: 0.7,
                        max_tokens: 1000,
                    }),
                }
            );

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(
                    errorData.error.message ||
                        `HTTP error! status: ${res.status}`
                );
            }

            const data = await res.json();

            if (data.choices && data.choices.length > 0) {
                const reply = data.choices[0].message.content;

                // Add AI response to messages history
                window.aiMessages.push({
                    role: "assistant",
                    content: reply,
                });

                // Remove typing indicator and add message to chat
                hideTypingIndicator();
                addMessage("bot", `🤖 <strong>AI Assistant:</strong> ${reply}`);

                // Show FAQ categories option
                let faqHtml =
                    '<div class="back-button" onclick="goBackToCategories()">📋 Lihat Kategori FAQ</div>';
                addMessage("bot", faqHtml);

                // Limit context window to save tokens
                if (window.aiMessages.length > 10) {
                    // Keep system message and last 4 exchanges (8 messages)
                    window.aiMessages = [
                        window.aiMessages[0],
                        ...window.aiMessages.slice(-8),
                    ];
                }
            } else {
                hideTypingIndicator();
                addMessage(
                    "bot",
                    "Maaf, saya tidak dapat memproses permintaan Anda saat ini. Silakan coba lagi nanti atau pilih dari kategori FAQ berikut:"
                );
                displayCategories();
            }
        } catch (error) {
            console.error("Error calling AI API:", error);
            hideTypingIndicator();
            addMessage(
                "bot",
                `Maaf, terjadi kesalahan teknis: ${error.message}. Silakan coba lagi nanti atau pilih dari kategori FAQ berikut:`
            );
            displayCategories();
        } finally {
            // Re-enable input
            setInputState(false);
        }
    }
}

// Dummy functions to avoid reference errors if they are in another file
function addMessage(sender, message) {
    console.log(`${sender}: ${message}`);
}
function showTypingIndicator() {
    console.log("Typing...");
}
function hideTypingIndicator() {
    console.log("Stopped typing.");
}
function setInputState(disabled) {
    console.log(`Input disabled: ${disabled}`);
}

// Make functions available globally for onclick handlers
window.selectCategory = selectCategory;
window.selectQuestion = selectQuestion;
window.goBackToCategories = goBackToCategories;
window.goBackToQuestions = goBackToQuestions;
window.handleFaqAiMessage = handleFaqAiMessage;
window.initializeFaqAiChat = initializeFaqAiChat;
