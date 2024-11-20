export const commonMethods = {
    stripResponseHtml: (userName, messageBody) => {
        String.prototype.replaceAllTxt = function replaceAll(search, replace) {
          return this.split(search).join(replace);
        };
        let body = messageBody.replaceAllTxt("<p>", "");
        body = body.replaceAllTxt("</p>", "\n");
        body = body.replaceAllTxt("<br><br>", "\n");
        body = body.replaceAllTxt("<br><br><br><br>", "\n\n");
        body = body.replaceAllTxt("<br>", "");
        body = body.replaceAllTxt("<strong>", "*");
        body = body.replaceAllTxt("<strong> ", "*");
        body = body.replaceAllTxt("</strong>", "*");
        body = body.replaceAllTxt("</strong>", "*");
        body = body.replaceAllTxt('<span style="color: rgb(0, 0, 0);">', '');
        body = body.replaceAllTxt("</span>", "");
        body = body.replaceAllTxt("<em>", "_");
        body = body.replaceAllTxt("<em>", "_");
        body = body.replaceAllTxt("</em>", "_");
        body = body.replaceAllTxt("</em>", "_");
        body = body.replaceAllTxt("&nbsp;", " ");
        body = body.replaceAllTxt("&amp;", "&");
        body = body.replaceAllTxt("{{Name}}", userName);
        body = body.replace("*","<strong>");
        body = body.replace( "*","</strong>");

        return body;
    }
}