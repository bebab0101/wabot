let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085878056250]
│ • PAKET TRI🗿
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [089516809533]
│ • TRI [089516809533]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
