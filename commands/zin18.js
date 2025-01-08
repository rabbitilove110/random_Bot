const { SlashCommandBuilder, CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName("진화18")
        .setDescription("18단계 진화 (3%)"),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async run(interaction){
        const zinhwa = Math.random() * 99;
        const channel = interaction.client.channels.cache.find((channel) => {
            return channel.id === "1326494716329721919";
        });
        channel.send(`18단계 진화 시도!\n진화 난수 : ${zinhwa}`);
        if(zinhwa > 3){
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 실패")
                    .setDescription(`진화에 실패했습니다!\n16단계 ~ 18단계 실패 보상 : 55,000원 자유 + 챌린지 3번 진행 휙득!`)
                    .setColor('Red')
                ]
            })
        } else {
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle("진화 성공")
                    .setDescription(`진화에 성공했습니다!\n17단계 성공보상 : 70000원 깊카 휙득!`)
                    .setColor('Green')
                ]
            })
        }
    }
}