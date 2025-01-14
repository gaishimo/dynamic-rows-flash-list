import { FlashList } from "@shopify/flash-list";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { measureHeights } from "@bigbee.dev/expo-measure-text";

const wholeWidth = Dimensions.get("window").width;
const wholeHeight = Dimensions.get("window").height;

export default function DynamicRowList() {
  const [textHeights, setTextHeights] = useState<number[]>(data.map(() => 20));

  const calculateTextHeights = useCallback(async () => {
    try {
      const result = await measureHeights({
        texts: data,
        width: wholeWidth - 32,
        fontSize: 16,
        lineHeight: 24,
      });
      console.log("result", result);
      setTextHeights(result);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }, []);

  useEffect(() => {
    calculateTextHeights();
  }, [calculateTextHeights]);

  const estimatedItemSize = useMemo(() => average(textHeights), [textHeights]);
  // const estimatedItemSize = 50;

  console.log("estimatedItemSize", estimatedItemSize);

  return (
    <SafeAreaView style={styles.screen}>
      <FlashList
        data={data}
        estimatedListSize={{ width: wholeWidth, height: wholeHeight }}
        estimatedItemSize={estimatedItemSize ?? 0}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, i) => i.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, paddingHorizontal: 16, paddingVertical: 16 },
  row: {
    marginBottom: 16,
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderColor: "rgb(150, 150, 150)",
    paddingVertical: 4,
  },
  rowText: { fontSize: 16, lineHeight: 24 },
});

function average(arr: number[]) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

const data = [
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
  "こんにちは、皆さん。今日は字幕のサンプルを紹介します。",
  "これは短いセリフです。",
  "字幕のタイミングを確認しましょう。適切な表示時間を設定することが重要です。",
  "ご覧いただきありがとうございます。次に進みましょう。",
  "ここで重要なポイントを詳しく説明します。具体的な事例を交えて解説します。",
  "質問があればどうぞ。皆さんの疑問にお答えします。",
  "この部分は少し難しいですが、一緒に理解を深めましょう。",
  "プロジェクトの成功には、チーム全員の協力とコミュニケーションが欠かせません。今後も皆さんと一緒に取り組んでいきたいと思います。",
  "もう少し詳しく見てみましょう。具体的なデータを用いて説明します。",
  "次回のトピックは最新の技術動向です。人工知能の進化とその応用例について触れます。",
  "まとめとして、今日の重要な点を振り返ります。これらを活用してさらなる発展を目指しましょう。",
  "ご協力ありがとうございました。皆さんのおかげで成功裏に終えることができました。",
  "このセクションでは、最新の技術動向について詳しく解説します。具体的には、人工知能の進化とその応用例について触れます。",
  "ご静聴、ありがとうございました。何かご不明な点がありましたら、お気軽にお問い合わせください。",
  "お気をつけてお帰りください。またお会いしましょう。",
  "これでプレゼンテーションを終わります。今後ともよろしくお願いいたします。",
  "ここで一息つきましょう。次のセクションに移ります。",
  "この部分については、さらなる調査が必要です。詳細なレポートを準備します。",
  "皆さんの努力に感謝します。これからも一緒に頑張りましょう。",
  "ご質問がありましたら、どうぞお知らせください。丁寧にお答えいたします。",
  "またお会いしましょう。素晴らしい一日をお過ごしください。",
];
