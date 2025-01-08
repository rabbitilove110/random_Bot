const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName("진화15")
        .setDescription("15단계 진화 (15%)"),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async run(interaction){
        const zinhwa = Math.random() * 99;
        const channel = interaction.client.channels.cache.find((channel) => {
            return channel.id === "1326494716329721919";
        });
        channel.send(`15단계 진화 시도!\n진화 난수 : ${zinhwa}`);
        if(zinhwa > 15){
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 실패")
                    .setDescription(`진화에 실패했습니다!\n13단계 ~ 15단계 실패 보상 : 45,000원 깊카 (기적의 검, 라스트 워, Kpop 피아노타일, Uno, 길건너 친구들, 의지의 히어로, 라이더, 슈퍼펭귄, 무한의 계단 中 1개) 휙득!`)
                    .setColor('Red')
                ]
            })
        } else {
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 성공")
                    .setDescription(`진화에 성공했습니다!\n15단계 성공보상 : 53,000원 지류 문화상품권 (깊카 교환X, 컬쳐랜드X, 오로지 문화생활에만 투자 가능한 상품권) 휙득!`)
                    .setColor('Green')
                ]
            })
        }
    }
}