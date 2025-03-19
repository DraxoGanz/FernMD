const axios = require('axios');

module.exports = {
    command: ["ghstalk", "githubstalk"],
    description: "Menampilkan info dari github user",
    
    execute: async (m, { args, reply, Draxo }) => {
        if (!args[0]) return reply("❌ Username GitHub-nya mana?");
        
        try {
            const res = await githubstalk(args[0]);

            const caption = `
*👤 Username :* ${res.username}
*📛 Nickname :* ${res.nickname || 'Tidak ada'}
*📜 Bio :* ${res.bio || 'Tidak ada'}
*🆔 ID :* ${res.id}
*🔗 Node ID :* ${res.nodeId}
*🏷️ Type :* ${res.type}
*👑 Admin :* ${res.admin ? 'Ya' : 'Tidak'}
*🏢 Company :* ${res.company || 'Tidak ada'}
*🌍 Blog :* ${res.blog || 'Tidak ada'}
*📍 Location :* ${res.location || 'Tidak ada'}
*📧 Email :* ${res.email || 'Tidak ada'}
*📂 Public Repo :* ${res.public_repo}
*📂 Public Gists :* ${res.public_gists}
*👥 Followers :* ${res.followers}
*👣 Following :* ${res.following}
*📆 Created At :* ${res.created_at}
*🔄 Updated At :* ${res.updated_at}
`;

            await Draxo.sendMessage(m.chat, { 
                image: { url: res.profile_pic }, 
                caption: caption
            }, { quoted: m });

        } catch (e) {
            reply(`❌ Error: ${e.message}`);
        }
    }
};

// Function untuk mengambil data GitHub
async function githubstalk(user) {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${user}`);
        return {
            username: data.login,
            nickname: data.name,
            bio: data.bio,
            id: data.id,
            nodeId: data.node_id,
            profile_pic: data.avatar_url,
            url: data.html_url,
            type: data.type,
            admin: data.site_admin,
            company: data.company,
            blog: data.blog,
            location: data.location,
            email: data.email,
            public_repo: data.public_repos,
            public_gists: data.public_gists,
            followers: data.followers,
            following: data.following,
            created_at: data.created_at,
            updated_at: data.updated_at
        };
    } catch (error) {
        throw new Error("User tidak ditemukan atau API GitHub error.");
    }
}