export const characters = [
  {
    id: 'batman',
    name: 'Bruce Wayne (Batman)',
    title: 'The Dark Knight',
    image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=1000&auto=format&fit=crop',
    color: 'from-gray-700 to-black',
    bio: [
      {
        heading: 'Origin & Early Life (Nguồn gốc)',
        text: 'Bruce Wayne was born to Dr. Thomas Wayne and Martha Wayne, two very wealthy and charitable socialites of Gotham City. Bruce was brought up in Wayne Manor, with its wealthy splendor, and led a happy and privileged existence until the age of eight. His parents were murdered by a petty mugger named Joe Chill right in front of him. This traumatic event left him with a lifelong vow to rid the city of the evil that had taken his parents\' lives.',
        image: 'https://images.unsplash.com/photo-1485602497677-70e28f32dd75?q=80&w=1000&auto=format&fit=crop' // Dark alley vibe
      },
      {
        heading: 'The Dark Knight (Kỵ sĩ bóng đêm)',
        text: 'Wayne traveled the world for years, seeking out experts in various fields, training himself to physical and mental perfection. Upon returning to Gotham, he realized that criminals are a "superstitious and cowardly lot". To strike terror into their hearts, he adopted the persona of a bat, a creature that had frightened him as a child. Thus, Batman was born.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop' // Bat/darkness vibe
      },
      {
        heading: 'Methodology & Gadgets (Phương pháp & Vũ khí)',
        text: 'Unlike many other superheroes, Batman has no inherent superhuman powers; he relies on "his own scientific knowledge, detective skills, and athletic prowess." He utilizes a vast array of specialized, high-tech vehicles and gadgets (like the Batmobile and Batarangs) mostly stored in the Batcave. He follows a strict moral code, the most prominent being his rule against killing.',
      }
    ],
    vocabulary: [
      { word: 'Vigilante', meaning: 'Người hành hiệp trượng nghĩa', type: 'Noun' },
      { word: 'Vengeance', meaning: 'Sự báo thù, trả thù', type: 'Noun' },
      { word: 'Intimidation', meaning: 'Sự đe dọa, dọa dẫm', type: 'Noun' },
      { word: 'Superstitious', meaning: 'Mê tín', type: 'Adjective' },
      { word: 'Gadget', meaning: 'Công cụ, đồ gá (công nghệ cao)', type: 'Noun' }
    ],
    quotes: [
      { en: "It's not who I am underneath, but what I do that defines me.", vi: "Không phải bản chất bên trong, mà chính những gì tôi làm mới định nghĩa tôi là ai." },
      { en: "I am vengeance. I am the night. I am Batman.", vi: "Ta là sự báo thù. Ta là màn đêm. Ta là Người Dơi." },
      { en: "A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a young boy's shoulders.", vi: "Bất cứ ai cũng có thể là anh hùng. Ngay cả một người làm một việc đơn giản và an ủi như khoác chiếc áo choàng lên vai một cậu bé."}
    ]
  },
  {
    id: 'joker',
    name: 'The Joker',
    title: 'The Clown Prince of Crime',
    image: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?q=80&w=1000&auto=format&fit=crop',
    color: 'from-purple-500 to-green-500',
    bio: [
      {
        heading: 'The Unknown Origin (Nguồn gốc bí ẩn)',
        text: 'The Joker\'s true identity and origin remain a mystery, a fact he himself prefers. "If I\'m going to have a past, I prefer it to be multiple choice!" he famously stated. The most common origin story involves him falling into a vat of chemical waste, which bleached his skin white, turned his hair green, and his lips bright red. The resulting disfigurement drove him insane.',
        image: 'https://images.unsplash.com/photo-1542466500-dccb2789cbbb?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'Agent of Chaos (Kẻ gieo rắc hỗn loạn)',
        text: 'As the self-proclaimed "Clown Prince of Crime," the Joker views life as a sick, twisted joke. His actions are not driven by money or power, but by a desire to prove that anyone can be pushed into madness after "one bad day." He is Batman\'s ultimate antithesis—where Batman represents order and discipline, the Joker represents pure, unadulterated chaos.',
      },
      {
        heading: 'Psychological Warfare (Tâm lý chiến)',
        text: 'The Joker does not have superhuman abilities. Instead, he uses his genius-level intellect to orchestrate elaborate, theatrical crimes. He is a master of chemical engineering, creating deadly toxins like "Joker Venom" that force victims to laugh to death. His unpredictability makes him the most dangerous villain in Gotham.',
        image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    vocabulary: [
      { word: 'Chaos', meaning: 'Sự hỗn loạn', type: 'Noun' },
      { word: 'Mastermind', meaning: 'Kẻ chủ mưu, bộ óc vĩ đại', type: 'Noun' },
      { word: 'Psychopathic', meaning: 'Bệnh hoạn, rối loạn nhân cách', type: 'Adjective' },
      { word: 'Anarchy', meaning: 'Tình trạng vô chính phủ', type: 'Noun' },
      { word: 'Unpredictable', meaning: 'Không thể đoán trước', type: 'Adjective' }
    ],
    quotes: [
      { en: "Why so serious?", vi: "Sao phải căng?" },
      { en: "All it takes is one bad day to reduce the sanest man alive to lunacy.", vi: "Tất cả những gì cần thiết chỉ là một ngày tồi tệ để biến kẻ tỉnh táo nhất thành kẻ điên rồ." },
      { en: "Introduce a little anarchy. Upset the established order, and everything becomes chaos.", vi: "Mang đến một chút vô chính phủ. Lật đổ trật tự đã được thiết lập, và mọi thứ sẽ trở thành hỗn loạn."}
    ]
  },
  {
    id: 'caocao',
    name: 'Cao Cao (Tào Tháo)',
    title: 'Lord of Wei',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-600 to-red-900',
    bio: [
      {
        heading: 'Rise to Power (Trỗi dậy)',
        text: 'Born in 155 AD during the late Eastern Han dynasty, Cao Cao was known in his youth for his cunning and martial arts. When the Yellow Turban Rebellion broke out, he distinguished himself as a capable military commander. Through strategic brilliance and ruthlessness, he eventually took control of the Han emperor, using the emperor\'s name to command other warlords.',
        image: 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'The Pragmatic Warlord (Nhà lãnh đạo thực dụng)',
        text: 'Unlike his rival Liu Bei, who championed Confucian virtues of benevolence, Cao Cao was a pragmatist. He valued talent over moral character, famously issuing decrees seeking out capable men regardless of their background or flaws. This pragmatic approach allowed him to build the most powerful state of the Three Kingdoms era, Cao Wei.',
      },
      {
        heading: 'Poet and Statesman (Nhà thơ & Chính trị gia)',
        text: 'Beyond his military conquests, Cao Cao was a brilliant statesman who implemented agricultural reforms (Tuntian system) to feed his armies and the populace. He was also an accomplished poet, whose verses reflect a deep contemplation of life\'s transience and the heavy burden of leadership.',
        image: 'https://images.unsplash.com/photo-1615598587178-5777bd4ba8fa?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    vocabulary: [
      { word: 'Warlord', meaning: 'Lãnh chúa, quân phiệt', type: 'Noun' },
      { word: 'Ruthless', meaning: 'Tàn nhẫn, vô tình', type: 'Adjective' },
      { word: 'Strategist', meaning: 'Chiến lược gia, mưu sĩ', type: 'Noun' },
      { word: 'Pragmatic', meaning: 'Thực dụng', type: 'Adjective' },
      { word: 'Hegemony', meaning: 'Bá quyền, quyền bá chủ', type: 'Noun' }
    ],
    quotes: [
      { en: "I would rather betray the world than let the world betray me.", vi: "Ta thà phụ người trong thiên hạ, chứ không để người trong thiên hạ phụ ta." },
      { en: "Victors are not judged by the means they used.", vi: "Kẻ chiến thắng không bị phán xét bởi cách thức họ giành được nó." },
      { en: "A man\'s worth is measured by the caliber of his enemies.", vi: "Giá trị của một người đàn ông được đo bằng tầm cỡ của kẻ thù của anh ta." }
    ]
  },
  {
    id: 'liubei',
    name: 'Liu Bei (Lưu Bị)',
    title: 'Emperor of Shu Han',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop',
    color: 'from-green-500 to-emerald-700',
    bio: [
      {
        heading: 'Humble Beginnings (Khởi đầu khiêm tốn)',
        text: 'Despite being a descendant of the Han royal family, Liu Bei grew up in poverty, making a living by weaving straw mats and sandals. His journey began when he met Guan Yu and Zhang Fei, forming a legendary brotherhood in the Peach Garden, pledging to protect the empire and bring peace to the people.',
        image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'The Benevolent Leader (Vị vua nhân từ)',
        text: 'Liu Bei is celebrated as the ideal benevolent ruler. In contrast to Cao Cao\'s ruthlessness, Liu Bei won the hearts of the people through compassion and virtue. He was known to cry for the suffering of his subjects and often refused to take territory by deceit, even when it cost him military advantage.',
      },
      {
        heading: 'Pursuit of Talent (Cầu hiền tài)',
        text: 'Recognizing his own limitations in strategy, Liu Bei famously visited Zhuge Liang\'s thatched cottage three times (Tam cố thảo lư) to recruit the brilliant strategist. With Zhuge Liang\'s guidance, Liu Bei eventually founded the state of Shu Han, dedicating his life to restoring the fallen Han dynasty.',
        image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    vocabulary: [
      { word: 'Benevolent', meaning: 'Nhân từ, nhân hậu', type: 'Adjective' },
      { word: 'Brotherhood', meaning: 'Tình huynh đệ', type: 'Noun' },
      { word: 'Restoration', meaning: 'Sự phục hưng', type: 'Noun' },
      { word: 'Virtuous', meaning: 'Đức hạnh', type: 'Adjective' },
      { word: 'Compassion', meaning: 'Lòng trắc ẩn, sự thương cảm', type: 'Noun' }
    ],
    quotes: [
      { en: "Do not fail to do good no matter how small the deed.", vi: "Chớ thấy việc thiện nhỏ mà không làm, chớ thấy việc ác nhỏ mà cứ làm." },
      { en: "Brothers are like arms and legs; wives and children are like clothing.", vi: "Anh em như thể tay chân, vợ con như quần áo." },
      { en: "A leader must first win the hearts of the people.", vi: "Một nhà lãnh đạo trước tiên phải thu phục được nhân tâm." }
    ]
  },
  {
    id: 'shurikenger',
    name: 'Shurikenger',
    title: 'The Ten-Faced Phantom',
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop',
    color: 'from-green-400 to-green-600',
    bio: [
      {
        heading: 'The Mysterious Ninja (Ninja bí ẩn)',
        text: 'Shurikenger is a key ally in Ninpuu Sentai Hurricaneger. True to his title, "The Ten-Faced Phantom" (Tenkū Ninja Shurikenger), his real identity and face are completely unknown. He renounced his former life, erased his own memories of who he once was, and abandoned his name to become the ultimate weapon of the Space Union Ninja School, dedicating himself solely to the path of the ninja. Không ai biết được khuôn mặt thật đằng sau chiếc mặt nạ xanh ấy, nhưng ý chí chiến đấu bảo vệ Trái Đất của anh là điều không thể bàn cãi.',
        image: 'https://images.unsplash.com/photo-1578589318433-39b51156cb14?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'Master of Disguise (Bậc thầy cải trang)',
        text: 'Rather than having a civilian form, Shurikenger constantly disguises himself as various ordinary people (often played by veteran Super Sentai actors). He is notoriously eccentric, frequently peppering his speech with broken English phrases like "I am Ninja of Ninja!" and "Me, me, me!" which creates a humorous contrast with his formidable combat skills. Dưới những lớp vỏ bọc hài hước đó, Shurikenger luôn theo dõi, bảo vệ và hỗ trợ các Hurricaneger và Gouraiger từ bóng tối, trở thành một người thầy, một người đồng đội vô hình nhưng vô cùng vững chắc.',
      },
      {
        heading: 'Fire Mode & Tenkuujin (Chế độ hỏa lực & Thiên Không Thần)',
        text: 'When pushed to his limits, Shurikenger can shed his heavy armor to activate "Fire Mode" (Chế độ Hỏa lực). In this form, he trades defense for blinding speed and overwhelming offensive power. He also commands the mighty Tenkuujin (Thiên Không Thần), a helicopter-themed mecha that provides crucial support in giant battles. Khả năng chiến đấu của anh vĩ đại đến mức ngay cả những kẻ thù mạnh nhất cũng phải e dè.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'Ultimate Sacrifice (Sự hiến tế tối thượng)',
        text: 'Despite his comical demeanor, Shurikenger is a tragic and deeply honorable warrior. Trong trận chiến cuối cùng chống lại Sandaru, một trong những thủ lĩnh tàn bạo nhất của Jakanja, Shurikenger đã quyết định hi sinh thân mình để tạo cơ hội cho những người đồng đội. He made the ultimate sacrifice to protect his friends and the world, proving that true heroism does not require a name or a face. Câu nói cuối cùng của anh về loài hoa đã trở thành một trong những khoảnh khắc xúc động nhất của lịch sử Super Sentai.',
      }
    ],
    vocabulary: [
      { word: 'Phantom', meaning: 'Bóng ma, ảo ảnh', type: 'Noun' },
      { word: 'Disguise', meaning: 'Cải trang, ngụy trang', type: 'Verb / Noun' },
      { word: 'Eccentric', meaning: 'Kỳ dị, lập dị', type: 'Adjective' },
      { word: 'Sacrifice', meaning: 'Sự hy sinh', type: 'Noun' }
    ],
    quotes: [
      { en: "Even if I forget the name of a flower, people still know what makes it beautiful.", vi: "Cho dù ta có quên đi tên một loài hoa, thì con người vẫn biết hoa đẹp ở điểm nào." },
      { en: "I am Ninja of Ninja! The green light bullet! Tenkū Ninja Shurikenger!", vi: "Ta là Ninja của các Ninja! Viên đạn ánh sáng xanh! Thiên Không Ninja Shurikenger!" },
      { en: "Oh my God! No way!", vi: "Ôi trời ơi! Không thể nào!" },
      { en: "See you again! Bye bye!", vi: "Hẹn gặp lại! Tạm biệt!" }
    ]
  },
  {
    id: 'sherlock-holmes',
    name: 'Sherlock Holmes',
    title: 'The Consulting Detective',
    image: 'https://images.unsplash.com/photo-1585145199187-5c1fa18600d3?q=80&w=1000&auto=format&fit=crop',
    color: 'from-blue-600 to-indigo-800',
    bio: [
      {
        heading: 'The World\'s Only Consulting Detective',
        text: 'Created by British author Sir Arthur Conan Doyle, Sherlock Holmes is arguably the most famous fictional detective in history. Residing at 221B Baker Street in London, Holmes established himself as a "consulting detective," a profession he invented, stepping in to assist clients and Scotland Yard when cases prove too baffling for ordinary police.',
        image: 'https://images.unsplash.com/photo-1620063268832-60cc07b4f53d?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'The Science of Deduction (Khoa học diễn dịch)',
        text: 'Holmes\' genius lies in his method of deduction. He observes minute details that others overlook—a smudge of clay on a shoe, the ash of a specific cigar, or the wear on a walking stick—and draws precise, logical conclusions about a person\'s life and the crime committed. He relies heavily on forensic science, chemistry, and anatomy.',
      },
      {
        heading: 'A Complex Mind (Tâm trí phức tạp)',
        text: 'Despite his brilliance, Holmes is often detached, eccentric, and struggles with human emotions, which he views as a hindrance to pure logic. His only true friend is Dr. John Watson, who serves as his biographer and moral compass. When lacking stimulating cases, Holmes is known to fall into deep melancholic depressions.',
        image: 'https://images.unsplash.com/photo-1616422285623-14669528d2d6?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    vocabulary: [
      { word: 'Deduction', meaning: 'Sự suy luận, diễn dịch', type: 'Noun' },
      { word: 'Observation', meaning: 'Sự quan sát', type: 'Noun' },
      { word: 'Forensic', meaning: 'Pháp y, thuộc về pháp luật', type: 'Adjective' },
      { word: 'Eccentric', meaning: 'Kỳ dị, lập dị', type: 'Adjective' },
      { word: 'Improbable', meaning: 'Khó có thể xảy ra', type: 'Adjective' }
    ],
    quotes: [
      { en: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.", vi: "Khi bạn đã loại trừ những điều không thể, những gì còn lại, dù khó tin đến đâu, cũng phải là sự thật." },
      { en: "The game is afoot.", vi: "Trò chơi đã bắt đầu." },
      { en: "To a great mind, nothing is little.", vi: "Đối với một bộ óc vĩ đại, không có gì là nhỏ nhặt." }
    ]
  },
  {
    id: 'moriarty',
    name: 'Professor Moriarty',
    title: 'The Napoleon of Crime',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1000&auto=format&fit=crop',
    color: 'from-gray-800 to-black',
    bio: [
      {
        heading: 'The Hidden Mastermind (Kẻ chủ mưu ẩn danh)',
        text: 'Professor James Moriarty is Sherlock Holmes\' ultimate nemesis. Unlike common street thugs, Moriarty is an aristocratic mathematical genius with an impeccable public reputation. In reality, he operates a vast, invisible criminal empire in London, providing strategy and protection for criminals in exchange for a cut of their profits.',
        image: 'https://images.unsplash.com/photo-1600704406184-7a136bfb1b74?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'The Spider in the Web (Con nhện giữa mạng lưới)',
        text: 'Holmes describes Moriarty as a spider sitting at the center of a web. He rarely commits crimes himself; instead, he manipulates his vast network of operatives. He is the intellectual equal of Sherlock Holmes, making him the only villain who truly challenges the great detective on a cognitive level.',
      },
      {
        heading: 'The Final Problem (Vấn đề cuối cùng)',
        text: 'The conflict between Holmes and Moriarty culminates in a legendary confrontation at the Reichenbach Falls in Switzerland. Realizing they are perfectly matched, the two engage in a fatal struggle, seemingly resulting in both of their deaths—a testament to Moriarty\'s status as Holmes\' ultimate equal and opposite.',
      }
    ],
    vocabulary: [
      { word: 'Nemesis', meaning: 'Kẻ thù truyền kiếp', type: 'Noun' },
      { word: 'Underworld', meaning: 'Thế giới ngầm, xã hội đen', type: 'Noun' },
      { word: 'Impeccable', meaning: 'Hoàn hảo, không tì vết', type: 'Adjective' },
      { word: 'Genius', meaning: 'Thiên tài', type: 'Noun' },
      { word: 'Aristocratic', meaning: 'Thuộc dòng dõi quý tộc', type: 'Adjective' }
    ],
    quotes: [
      { en: "If you are clever enough to bring destruction upon me, rest assured that I shall do as much to you.", vi: "Nếu anh đủ thông minh để mang lại sự hủy diệt cho tôi, hãy tin rằng tôi cũng sẽ làm điều tương tự với anh." },
      { en: "You have less frontal development than I should have expected.", vi: "Thùy trán của anh kém phát triển hơn tôi tưởng." }
    ]
  },
  {
    id: 'spiderman',
    name: 'Spider-Man',
    title: 'Your Friendly Neighborhood',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-500 to-blue-500',
    bio: [
      {
        heading: 'The Radioactive Bite (Vết cắn phóng xạ)',
        text: 'Peter Parker was an awkward but brilliant high school student in Queens, New York. During a school field trip, he was bitten by a radioactive spider, which granted him superhuman strength, agility, the ability to cling to walls, and a "spider-sense" that warns him of impending danger.',
        image: 'https://images.unsplash.com/photo-1610408544464-9b04859f7df8?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'A Tragic Lesson (Bài học bi thảm)',
        text: 'Initially, Peter used his powers for selfish gain in professional wrestling. However, he arrogantly allowed a burglar to escape, who later broke into his house and murdered his beloved Uncle Ben. This tragedy taught Peter his most defining lesson: "With great power, there must also come great responsibility."',
      },
      {
        heading: 'The Everyman Superhero (Siêu anh hùng bình dân)',
        text: 'Unlike billionaire Tony Stark or god-like Thor, Peter Parker is a working-class hero. He constantly struggles to balance his superhero life with his personal responsibilities—paying rent, keeping his job as a freelance photographer, and maintaining his relationships. His relatable struggles make him one of the most beloved characters globally.',
        image: 'https://images.unsplash.com/photo-1534809027769-6240033c4eb8?q=80&w=1000&auto=format&fit=crop'
      }
    ],
    vocabulary: [
      { word: 'Radioactive', meaning: 'Phóng xạ', type: 'Adjective' },
      { word: 'Responsibility', meaning: 'Trách nhiệm', type: 'Noun' },
      { word: 'Agility', meaning: 'Sự nhanh nhẹn, linh hoạt', type: 'Noun' },
      { word: 'Neighborhood', meaning: 'Khu vực lân cận, khu phố', type: 'Noun' },
      { word: 'Relatable', meaning: 'Gần gũi, dễ đồng cảm', type: 'Adjective' }
    ],
    quotes: [
      { en: "With great power comes great responsibility.", vi: "Sức mạnh càng lớn, trách nhiệm càng cao." },
      { en: "Anyone can wear the mask. You can wear the mask. If you didn't know that before, I hope you do now.", vi: "Ai cũng có thể đeo mặt nạ. Bạn cũng có thể đeo nó. Nếu trước đây bạn không biết điều đó, tôi hy vọng bây giờ bạn đã biết." }
    ]
  },
  {
    id: 'hannibal',
    name: 'Dr. Hannibal Lecter',
    title: 'Hannibal the Cannibal',
    image: 'https://images.unsplash.com/photo-1522093006610-8646b9a896d8?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-900 to-black',
    bio: [
      {
        heading: 'The Brilliant Mind (Bộ óc rực rỡ)',
        text: 'Dr. Hannibal Lecter is an acclaimed psychiatrist, a brilliant surgeon, and a man of impeccable, sophisticated taste. He speaks multiple languages, possesses a profound knowledge of art, music, and cuisine, and can psychologically dissect anyone he meets within minutes.',
        image: 'https://images.unsplash.com/photo-1601075727195-2c8c0e18efc2?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'The Cannibalistic Killer (Sát nhân ăn thịt)',
        text: 'Beneath his refined exterior lies a monstrous serial killer. Hannibal murders individuals he considers "rude" or unworthy, and ritually consumes their organs, often preparing them in gourmet dishes. He views himself not as a murderer, but as an apex predator culling the herd of the impolite.',
      },
      {
        heading: 'Psychological Manipulation (Thao túng tâm lý)',
        text: 'Even while incarcerated in a high-security asylum, Hannibal remains incredibly dangerous. He plays psychological games with the FBI agents who seek his help, most notably Clarice Starling. He demands "quid pro quo"—personal, traumatic secrets in exchange for clues about other serial killers.',
      }
    ],
    vocabulary: [
      { word: 'Psychiatrist', meaning: 'Bác sĩ tâm thần', type: 'Noun' },
      { word: 'Cannibal', meaning: 'Kẻ ăn thịt người', type: 'Noun' },
      { word: 'Cultured', meaning: 'Có văn hóa, thanh lịch', type: 'Adjective' },
      { word: 'Manipulation', meaning: 'Sự thao túng', type: 'Noun' },
      { word: 'Incarcerated', meaning: 'Bị giam cầm', type: 'Adjective' }
    ],
    quotes: [
      { en: "I ate his liver with some fava beans and a nice Chianti.", vi: "Tôi đã ăn gan của hắn với một ít đậu fava và một ly rượu vang Chianti ngon tuyệt." },
      { en: "Quid pro quo, Clarice.", vi: "Có qua có lại mới toại lòng nhau, Clarice." },
      { en: "Nothing happened to me, Officer Starling. I happened. You can't reduce me to a set of influences.", vi: "Không có gì xảy ra với tôi cả, Sĩ quan Starling. Tôi đã xảy ra. Cô không thể đánh giá tôi qua một loạt những tác động được." }
    ]
  },
  {
    id: 'tyrion',
    name: 'Tyrion Lannister',
    title: 'The Halfman',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1000&auto=format&fit=crop',
    color: 'from-yellow-500 to-red-700',
    bio: [
      {
        heading: 'The Unwanted Son (Đứa con không được mong muốn)',
        text: 'Born a dwarf into the powerful and wealthy House Lannister, Tyrion was despised by his father, Tywin, and his sister, Cersei, because his mother died giving birth to him. Despised for his physical stature in a martial society, Tyrion learned early on that his mind was his only weapon.',
        image: 'https://images.unsplash.com/photo-1627943588975-f936f2b4b45f?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'A Mind Like a Sword (Trí tuệ sắc bén)',
        text: 'To compensate for his physical limitations, Tyrion read voraciously. He possesses a cunning intellect, a sharp tongue, and a deep understanding of human nature and politics. He uses his wealth, wit, and strategic brilliance to outmaneuver physically stronger opponents and political rivals.',
      },
      {
        heading: 'The Reluctant Hand (Vị Tể tướng bất đắc dĩ)',
        text: 'Despite the contempt his family shows him, Tyrion often proves to be the most capable leader among them. He successfully defended King\'s Landing during the Battle of the Blackwater and consistently tries to bring reason and justice to a brutal world, eventually becoming the Hand of the King to multiple rulers.',
      }
    ],
    vocabulary: [
      { word: 'Dwarf', meaning: 'Người lùn', type: 'Noun' },
      { word: 'Intellect', meaning: 'Trí tuệ', type: 'Noun' },
      { word: 'Wit', meaning: 'Sự hóm hỉnh, trí khôn', type: 'Noun' },
      { word: 'Perilous', meaning: 'Đầy hiểm nguy', type: 'Adjective' },
      { word: 'Outmaneuver', meaning: 'Vượt mặt bằng mưu trí', type: 'Verb' }
    ],
    quotes: [
      { en: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.", vi: "Tâm trí cần sách như thanh kiếm cần đá mài, để có thể giữ được sự sắc bén." },
      { en: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness.", vi: "Đừng bao giờ quên bạn là ai, vì chắc chắn thế giới sẽ không quên điều đó. Hãy biến nó thành sức mạnh. Khi đó, nó sẽ không bao giờ là điểm yếu của bạn." },
      { en: "I drink and I know things.", vi: "Tôi uống rượu và tôi biết nhiều thứ." }
    ]
  },
  {
    id: 'tony-stark',
    name: 'Tony Stark',
    title: 'The Genius Billionaire',
    image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1000&auto=format&fit=crop',
    color: 'from-red-500 to-yellow-500',
    bio: [
      {
        heading: 'The Merchant of Death (Thương gia tử thần)',
        text: 'Anthony Edward Stark inherited Stark Industries at a young age, turning it into the world\'s leading weapons manufacturer. A genius inventor, billionaire, playboy, and philanthropist, Tony lived a life of selfish luxury and arrogance, blissfully ignorant of the devastation his weapons caused worldwide.',
        image: 'https://images.unsplash.com/photo-1508215885820-4585e56109f8?q=80&w=1000&auto=format&fit=crop'
      },
      {
        heading: 'The Awakening (Sự thức tỉnh)',
        text: 'During a weapons demonstration in a war zone, Tony was captured by terrorists and critically injured by his own company\'s bomb. To save his life and escape, he built a miniature Arc Reactor and a suit of powered armor. This traumatic event fundamentally changed his worldview.',
      },
      {
        heading: 'I am Iron Man (Tôi là Người Sắt)',
        text: 'Returning home, Tony shut down his company\'s weapons division and refined his armor to protect the world rather than destroy it. Unlike most superheroes who hide their identities, Tony held a press conference and boldly declared, "I am Iron Man." He went on to become a founding member of the Avengers, ultimately sacrificing himself to save the universe.',
      }
    ],
    vocabulary: [
      { word: 'Magnate', meaning: 'Người có quyền thế, trùm tư bản', type: 'Noun' },
      { word: 'Philanthropist', meaning: 'Nhà từ thiện', type: 'Noun' },
      { word: 'Ingenious', meaning: 'Khéo léo, tài tình', type: 'Adjective' },
      { word: 'Mechanized', meaning: 'Được cơ khí hóa', type: 'Adjective' },
      { word: 'Arrogance', meaning: 'Sự kiêu ngạo', type: 'Noun' }
    ],
    quotes: [
      { en: "I am Iron Man.", vi: "Tôi là Người Sắt." },
      { en: "Genius, billionaire, playboy, philanthropist.", vi: "Thiên tài, tỷ phú, dân chơi, nhà từ thiện." },
      { en: "Sometimes you gotta run before you can walk.", vi: "Đôi khi bạn phải chạy trước khi bạn có thể biết đi." }
    ]
  }
];
