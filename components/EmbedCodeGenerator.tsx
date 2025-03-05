export default function EmbeddedCodeGenerator({
  widgetColor,
  widgetPosition,
  widgetMessage,
  apikey,
}: {
  widgetColor: string;
  widgetPosition: string;
  widgetMessage: string;
  apikey: string;
}) {
  const embedCode =
    `<script src="https://api.thetasden.site/chat-widget.js?api_key=${apikey}&color=${widgetColor}&position=${widgetPosition}"></script>`.trim();

  return (
    <textarea
      readOnly
      className="w-full p-5 border border-teal-700/20 mt-3 rounded-md bg-transparent  text-sm font-mono "
      rows={8}
      value={embedCode}
    />
  );
}
