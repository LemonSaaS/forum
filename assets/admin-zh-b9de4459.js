
 System.register('locale', [], function(_export) {
    return {
        execute: function() {
            _export('default', function(app) {
                app.translator.translations = {"flarum-likes.admin.permissions.like_posts_label":"\u5185\u5bb9\u70b9\u8d5e","flarum-approval.admin.permissions.approve_posts_label":"\u5ba1\u6838\u5185\u5bb9","flarum-approval.admin.permissions.reply_without_approval_label":"\u56de\u590d\u65e0\u9700\u5ba1\u6838","flarum-approval.admin.permissions.start_discussions_without_approval_label":"\u8bdd\u9898\u65e0\u9700\u5ba1\u6838","core.admin.add_extension.developer_text":"\u5982\u679c\u4f60\u662f\u5f00\u53d1\u8005\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb <a>\u5f00\u53d1\u6587\u6863<\/a> \uff0c\u5e76\u5f00\u53d1\u65b0\u7684\u63d2\u4ef6\u3002","core.admin.add_extension.install_text":"\u540c\u65f6\uff0c\u4f60\u53ef\u4ee5\u5728 <a>Flarum Community site<\/a> \u5bfb\u627e\u63d2\u4ef6\uff0c\u6216\u4f7f\u7528 Composer \u624b\u52a8\u5b89\u88c5\u3002","core.admin.add_extension.temporary_text":"\u4e0d\u8fdc\u7684\u5c06\u6765\uff0c\u8fd9\u91cc\u80fd\u66f4\u5feb\u6377\u5730\u6dfb\u52a0\u62d3\u5c55\u63d2\u4ef6\u3002\u6b63\u5982\u6211\u4eec\u6240\u8bf4\uff0c\u6211\u4eec\u6b63\u5728\u5efa\u9020\u4e00\u4e2a\u751f\u6001\u7cfb\u7edf\u3002","core.admin.add_extension.title":"\u6dfb\u52a0\u63d2\u4ef6","core.admin.appearance.colored_header_label":"\u5f69\u8272\u5bfc\u822a","core.admin.appearance.colors_heading":"\u989c\u8272","core.admin.appearance.colors_text":"\u9009\u62e9\u4e24\u79cd\u989c\u8272\u4f5c\u4e3a\u4e3b\u9898\u8272\u3002\u7b2c\u4e00\u79cd\u5c06\u7528\u4e8e\u7a81\u51fa\u663e\u793a\u7684\u989c\u8272\uff0c\u7b2c\u4e8c\u79cd\u5c06\u4f5c\u4e3a\u80cc\u666f\u7b49\u5143\u7d20\u7684\u8272\u8c03\u3002","core.admin.appearance.custom_header_heading":"\u81ea\u5b9a\u4e49\u5934\u90e8","core.admin.appearance.custom_header_text":"\u6dfb\u52a0 HTML \u4ee3\u7801\u4f5c\u4e3a\u9875\u9762\u5934\u90e8\uff0c\u663e\u793a\u5728\u7ad9\u70b9\u6807\u9898\u4e0a\u65b9\u3002","core.admin.appearance.custom_styles_heading":"\u81ea\u5b9a\u4e49\u6837\u5f0f","core.admin.appearance.custom_styles_text":"\u6dfb\u52a0 LESS\/CSS \u4ee3\u7801\u4ee5\u751f\u6210\u81ea\u5b9a\u4e49\u6837\u5f0f\u4f5c\u4e3a\u9ed8\u8ba4\u5916\u89c2\u3002","core.admin.appearance.dark_mode_label":"\u591c\u95f4\u6a21\u5f0f","core.admin.appearance.edit_css_button":"\u7f16\u8f91\u6837\u5f0f\u4ee3\u7801","core.admin.appearance.edit_header_button":"\u7f16\u8f91\u81ea\u5b9a\u4e49\u5934\u90e8","core.admin.appearance.enter_hex_message":"\u8bf7\u8f93\u5165\u4e00\u4e2a\u5341\u516d\u8fdb\u5236\u989c\u8272\u4ee3\u7801\u3002","core.admin.appearance.favicon_heading":"Favicon","core.admin.appearance.favicon_text":"\u4e0a\u4f20 Favicon \u56fe\u7247\u4f5c\u4e3a\u7ad9\u70b9\u5fbd\u6807\u5c55\u793a\u3002","core.admin.appearance.logo_heading":"Logo","core.admin.appearance.logo_text":"\u4e0a\u4f20 Logo \u5e76\u5c55\u793a\u5728\u5bfc\u822a\u7684\u7ad9\u70b9\u6807\u9898\u5904\u3002","core.admin.appearance.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.admin.basics.all_discussions_label":"\u6240\u6709\u8bdd\u9898","core.admin.basics.default_language_heading":"\u9ed8\u8ba4\u8bed\u8a00","core.admin.basics.forum_description_heading":"\u7ad9\u70b9\u63cf\u8ff0","core.admin.basics.forum_description_text":"\u901a\u8fc7\u51e0\u4e2a\u77ed\u8bed\u6216\u53e5\u5b50\u63cf\u8ff0\u4f60\u7684\u7ad9\u70b9\uff0c\u5b83\u5c06\u4f5c\u4e3a Meta \u6807\u8bb0\uff0c\u5e76\u4e14\u88ab\u641c\u7d22\u5f15\u64ce\u6293\u53d6\u3002","core.admin.basics.forum_title_heading":"\u7ad9\u70b9\u540d\u79f0","core.admin.basics.home_page_heading":"\u7ad9\u70b9\u9996\u9875","core.admin.basics.home_page_text":"\u9009\u62e9\u4e00\u4e2a\u9875\u9762\u4f5c\u4e3a\u7ad9\u70b9\u9996\u9875\u3002\u5982\u679c\u8f93\u5165\u4e86\u81ea\u5b9a\u4e49\u503c\uff0c\u8bf7\u4f7f\u7528\u57fa\u4e8e\u7ad9\u70b9\u6839\u76ee\u5f55\u7684\u76f8\u5bf9\u8def\u5f84\u3002","core.admin.basics.saved_message":"\u4f60\u7684\u66f4\u6539\u5df2\u4fdd\u5b58","core.admin.basics.show_language_selector_label":"\u663e\u793a\u8bed\u8a00\u9009\u62e9","core.admin.basics.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.admin.basics.welcome_banner_heading":"\u6b22\u8fce\u6a2a\u5e45","core.admin.basics.welcome_banner_text":"\u8f93\u5165\u4e00\u6bb5\u6587\u5b57\u4f5c\u4e3a\u6a2a\u5e45\uff0c\u5b83\u5c06\u663e\u793a\u5728\u7ad9\u70b9\u7684\u201c\u6240\u6709\u8bdd\u9898\u201d\u9875\u9762\u4e2d\u3002","core.admin.dashboard.beta_warning_text":"\u8fd9\u662f\u4e00\u4e2a <strong>\u6d4b\u8bd5\u7248<\/strong> \u7a0b\u5e8f\uff0c\u4e0d\u5efa\u8bae\u4f60\u7528\u4e8e\u6b63\u5f0f\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u3002","core.admin.dashboard.contributing_text":"\u60f3\u8981\u8d21\u732e\uff1f \u9605\u8bfb <a>\u8d21\u732e\u6587\u6863<\/a> \u3002","core.admin.dashboard.extension_text":"\u60f3\u8981\u5f00\u53d1\u62d3\u5c55\uff1f \u9605\u8bfb <a>\u62d3\u5c55\u6587\u6863<\/a> \u3002","core.admin.dashboard.features_text":"\u6709\u597d\u7684\u4e3b\u610f\u6765\u6539\u5584\u529f\u80fd\uff1f\u8bf7\u6765\u8fd9\u544a\u8bc9\u6211\u4eec <a>\u7279\u6027\u6807\u7b7e<\/a> \u3002","core.admin.dashboard.support_text":"\u627e\u5230\u4e00\u4e2aBug\uff1f \u8bf7\u5728\u8fd9\u91cc\u53cd\u9988 <a>\u652f\u6301\u6807\u7b7e<\/a> \u3002","core.admin.dashboard.troubleshooting_text":"\u6709\u95ee\u9898\u5417\uff1f \u8bf7\u9605\u8bfb <a>\u6545\u969c\u6392\u9664\u6587\u6863<\/a> \u3002","core.admin.dashboard.version_text":"\u611f\u8c22\u4f60\u4f7f\u7528 Flarum \uff01 \u4f60\u6b63\u5728\u8fd0\u884c\u7248\u672c\u662f {version} \u3002","core.admin.dashboard.welcome_text":"\u6b22\u8fce\u4f7f\u7528 Flarum Beta!","core.admin.edit_css.customize_text":"\u6dfb\u52a0 LESS\/CSS \u4ee3\u7801\u4ee5\u751f\u6210\u81ea\u5b9a\u4e49\u6837\u5f0f\u4f5c\u4e3a <a>\u9ed8\u8ba4\u5916\u89c2<\/a> \u3002","core.admin.edit_css.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.admin.edit_css.title":"\u81ea\u5b9a\u4e49\u6837\u5f0f","core.admin.edit_group.color_label":"\u989c\u8272","core.admin.edit_group.delete_button":"\u5220\u9664\u7528\u6237\u7ec4","core.admin.edit_group.delete_confirmation":"\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u7528\u6237\u7ec4\uff1f\u8be5\u7528\u6237\u7ec4\u4e2d\u7684\u7528\u6237\u4e0d\u4f1a\u88ab\u5220\u9664\u3002","core.admin.edit_group.icon_label":"\u56fe\u6807","core.admin.edit_group.icon_text":"\u8f93\u5165\u4efb\u610f\u4e00\u4e2a <a>FontAwesome<\/a> \u56fe\u6807\u540d\u79f0\uff0c<em>\u65e0\u9700<\/em>\u6dfb\u52a0 <code>fa-<\/code> \u524d\u7f00\u3002","core.admin.edit_group.name_label":"\u540d\u79f0","core.admin.edit_group.plural_placeholder":"\u7528\u6237\u7ec4 (\u4f8b\u5982 Mods)","core.admin.edit_group.singular_placeholder":"\u5355\u4e2a\u7528\u6237 (\u4f8b\u5982 Mod)","core.admin.edit_group.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.admin.edit_group.title":"\u65b0\u7528\u6237\u7ec4","core.admin.edit_header.customize_text":"\u6dfb\u52a0 HTML \u4ee3\u7801\u4f5c\u4e3a\u9875\u9762\u5934\u90e8\uff0c\u663e\u793a\u5728\u7ad9\u70b9\u6807\u9898\u4e0a\u65b9\u3002","core.admin.edit_header.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.admin.edit_header.title":"\u7f16\u8f91\u81ea\u5b9a\u4e49\u5934\u90e8","core.admin.email.account_heading":"SMTP \u8d26\u6237","core.admin.email.addresses_heading":"\u90ae\u4ef6\u5730\u5740","core.admin.email.driver_label":"\u53d1\u4fe1\u65b9\u6cd5","core.admin.email.encryption_label":"\u52a0\u5bc6","core.admin.email.from_label":"\u53d1\u4fe1\u5730\u5740","core.admin.email.heading":"\u90ae\u4ef6\u914d\u7f6e","core.admin.email.host_label":"\u90ae\u4ef6\u670d\u52a1\u5668\u5730\u5740","core.admin.email.password_label":"\u5bc6\u7801","core.admin.email.port_label":"\u7aef\u53e3","core.admin.email.server_heading":"SMTP \u914d\u7f6e","core.admin.email.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.admin.email.text":"\u914d\u7f6e\u4f60\u7684 SMTP \u670d\u52a1\u5668\u7528\u4e8e\u7ad9\u70b9\u7684\u90ae\u4ef6\u53d1\u9001\u3002","core.admin.email.username_label":"\u7528\u6237\u540d","core.admin.extensions.add_button":"\u6dfb\u52a0\u63d2\u4ef6","core.admin.extensions.settings_button":"\u4e2a\u4eba\u8bbe\u7f6e","core.admin.extensions.uninstall_button":"\u5378\u8f7d","core.admin.header.log_out_button":"\u767b\u51fa","core.admin.loading.title":"\u8bf7\u7a0d\u540e...","core.admin.nav.appearance_button":"\u5916\u89c2\u914d\u7f6e","core.admin.nav.appearance_text":"\u81ea\u5b9a\u4e49\u9875\u9762\u989c\u8272\u3001\u5fbd\u6807\u548c\u5176\u4ed6\u53d8\u91cf\u3002","core.admin.nav.basics_button":"\u57fa\u672c\u8bbe\u7f6e","core.admin.nav.basics_text":"\u4fee\u6539\u4f60\u7684\u7ad9\u70b9\u540d\u79f0\u3001\u8bed\u8a00\u548c\u5176\u4ed6\u8bbe\u7f6e\u3002","core.admin.nav.dashboard_button":"\u4e3b\u8981\u6982\u89c8","core.admin.nav.dashboard_text":"\u5404\u9879\u6570\u636e\uff0c\u4e00\u76ee\u4e86\u7136\u3002","core.admin.nav.email_button":"\u90ae\u4ef6\u914d\u7f6e","core.admin.nav.email_text":"\u914d\u7f6e\u7ad9\u70b9\u7684\u90ae\u4ef6\u670d\u52a1\u3002","core.admin.nav.extensions_button":"\u63d2\u4ef6\u62d3\u5c55","core.admin.nav.extensions_text":"\u6dfb\u52a0\u65b0\u7684\u63d2\u4ef6\u62d3\u5c55\u5230\u4f60\u7684\u7ad9\u70b9\u3002","core.admin.nav.permissions_button":"\u7528\u6237\u6743\u9650","core.admin.nav.permissions_text":"\u914d\u7f6e\u5404\u7528\u6237\u7ec4\u7684\u8bbf\u95ee\u89c4\u5219\u548c\u64cd\u4f5c\u6743\u9650\u3002","core.admin.permissions.allow_renaming_label":"\u4fee\u6539\u6807\u9898","core.admin.permissions.allow_post_editing_label":"\u4fee\u6539\u5185\u5bb9","core.admin.permissions.create_heading":"\u8bdd\u9898\u76f8\u5173","core.admin.permissions.delete_discussions_forever_label":"\u6c38\u4e45\u5220\u9664\u8bdd\u9898","core.admin.permissions.delete_discussions_label":"\u5220\u9664\u8bdd\u9898","core.admin.permissions.delete_posts_forever_label":"\u6c38\u4e45\u5220\u9664\u56de\u590d","core.admin.permissions.edit_and_delete_posts_label":"\u7f16\u8f91\u6216\u5220\u9664\u56de\u590d","core.admin.permissions.global_heading":"\u5168\u5c40","core.admin.permissions.moderate_heading":"\u7ba1\u7406\u76f8\u5173","core.admin.permissions.new_group_button":"\u65b0\u7528\u6237\u7ec4","core.admin.permissions.participate_heading":"\u5185\u5bb9\u76f8\u5173","core.admin.permissions.read_heading":"\u8bbf\u95ee\u76f8\u5173","core.admin.permissions.rename_discussions_label":"\u4fee\u6539\u6807\u9898","core.admin.permissions.reply_to_discussions_label":"\u53d1\u8868\u56de\u590d","core.admin.permissions.sign_up_label":"\u6ce8\u518c\u8d26\u6237","core.admin.permissions.start_discussions_label":"\u53d1\u5e03\u8bdd\u9898","core.admin.permissions.view_discussions_label":"\u6d4f\u89c8\u8bdd\u9898","core.admin.permissions.view_post_ips_label":"\u67e5\u770b\u53d1\u8868 IP \u5730\u5740","core.admin.permissions.view_user_list_label":"\u67e5\u770b\u7528\u6237\u8d44\u6599","core.admin.permissions_controls.allow_indefinitely_button":"\u65e0\u9650\u671f","core.admin.permissions_controls.allow_some_minutes_button":"\u53d1\u5e03 {count} \u5206\u949f\u5185|\u53d1\u5e03 {count} \u5206\u949f\u5185","core.admin.permissions_controls.allow_ten_minutes_button":"\u53d1\u5e03 10 \u5206\u949f\u5185","core.admin.permissions_controls.allow_until_reply_button":"\u76f4\u5230\u65b0\u56de\u590d","core.admin.permissions_controls.everyone_button":"\u6240\u6709\u4eba","core.admin.permissions_controls.members_button":"\u7528\u6237\u7ec4","core.admin.permissions_controls.signup_closed_button":"\u5173\u95ed","core.admin.permissions_controls.signup_open_button":"\u5f00\u653e","core.admin.settings.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.admin.upload_image.remove_button":"\u79fb\u9664","core.admin.upload_image.upload_button":"\u9009\u62e9\u56fe\u7247","core.lib.badge.hidden_tooltip":"\u9690\u85cf","core.lib.username.deleted_text":"[deleted]","core.lib.error.generic_message":"\u7f51\u7edc\u4e0d\u592a\u987a\uff0c\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002","core.lib.error.not_found_message":"\u6ca1\u6709\u8fd9\u4e2a\u9875\u9762","core.lib.error.permission_denied_message":"\u597d\u50cf\u4e0d\u80fd\u8fdb\u884c\u6b64\u64cd\u4f5c","core.lib.error.rate_limit_exceeded_message":"\u4f60\u7684\u64cd\u4f5c\u592a\u9891\u7e41\u4e86\uff0c\u8bf7\u7b49\u4e00\u4f1a\u513f\u3002","core.lib.number_suffix.kilo_text":"K","core.lib.number_suffix.mega_text":"M","core.lib.series.glue_text":", ","core.lib.series.three_text":"{first}, {second}, \u8fd8\u6709 {third}","core.lib.series.two_text":"{first} \u548c {second}","flarum-tags.admin.basics.tags_label":"\u5206\u7c7b","flarum-tags.admin.edit_tag.color_label":"\u989c\u8272","flarum-tags.admin.edit_tag.delete_tag_button":"\u5220\u9664\u5206\u7c7b","flarum-tags.admin.edit_tag.delete_tag_confirmation":"\u4f60\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u5206\u7c7b\u5417\uff1f\u5220\u9664\u540e\u8be5\u5206\u7c7b\u4e2d\u7684\u8bdd\u9898\u4e0d\u4f1a\u88ab\u5220\u9664\u3002","flarum-tags.admin.edit_tag.description_label":"\u63cf\u8ff0","flarum-tags.admin.edit_tag.hide_label":"\u9996\u9875\u6240\u6709\u8bdd\u9898\u4e2d\u9690\u85cf","flarum-tags.admin.edit_tag.name_label":"\u540d\u79f0","flarum-tags.admin.edit_tag.name_placeholder":"\u540d\u79f0","flarum-tags.admin.edit_tag.slug_label":"URL","flarum-tags.admin.edit_tag.submit_button":"\u4fdd\u5b58\u66f4\u6539","flarum-tags.admin.edit_tag.title":"\u521b\u5efa\u5206\u7c7b","flarum-tags.admin.nav.tags_button":"\u8282\u70b9\u6807\u7b7e","flarum-tags.admin.nav.tags_text":"\u7ba1\u7406\u7ad9\u70b9\u7684\u8282\u70b9\u4e0e\u6807\u7b7e\u5217\u8868\u3002","flarum-tags.admin.permissions.allow_edit_tags_label":"\u5141\u8bb8\u4fee\u6539\u5206\u7c7b","flarum-tags.admin.permissions.restrict_by_tag_heading":"\u5355\u4e2a\u5206\u7c7b","flarum-tags.admin.permissions.tag_discussions_label":"\u4fee\u6539\u5206\u7c7b","flarum-tags.admin.tag_settings.range_separator_text":" \u81f3 ","flarum-tags.admin.tag_settings.required_primary_heading":"\u5fc5\u9009\u8282\u70b9\u6570\u91cf","flarum-tags.admin.tag_settings.required_primary_text":"\u8bbe\u5b9a\u5e94\u7528\u4e8e\u8bdd\u9898\u4e2d\u7684\u8282\u70b9\u6570\u91cf\u8303\u56f4\uff08\u6700\u5c0f\u503c\u4e0e\u6700\u5927\u503c\uff09","flarum-tags.admin.tag_settings.required_secondary_heading":"\u5fc5\u9009\u6807\u7b7e\u6570\u91cf","flarum-tags.admin.tag_settings.required_secondary_text":"\u8bbe\u5b9a\u5e94\u7528\u4e8e\u8bdd\u9898\u4e2d\u7684\u6807\u7b7e\u6570\u91cf\u8303\u56f4\uff08\u6700\u5c0f\u503c\u4e0e\u6700\u5927\u503c\uff09","flarum-tags.admin.tag_settings.title":"\u8bbe\u5b9a\u8303\u56f4","flarum-tags.admin.tags.about_tags_text":"\u8282\u70b9\u4e0e\u6807\u7b7e\u7528\u4e8e\u8bdd\u9898\u7684\u5206\u7c7b\u3002\u8282\u70b9\u7c7b\u4f3c\u4e8e\u4f20\u7edf\u8bba\u575b\u7684\u7248\u5757\uff0c\u5b83\u4eec\u53ef\u4ee5\u6709\u4e24\u4e2a\u7ed3\u6784\u5c42\u6b21\u3002\u6807\u7b7e\u6ca1\u6709\u7ed3\u6784\u5c42\u6b21\uff0c\u5e38\u4f5c\u4e3a\u5fae\u578b\u8bdd\u9898\u5206\u7c7b\u7684\u5173\u952e\u8bcd\u3002","flarum-tags.admin.tags.create_tag_button":"\u521b\u5efa\u5206\u7c7b","flarum-tags.admin.tags.primary_heading":"\u8282\u70b9","flarum-tags.admin.tags.secondary_heading":"\u6807\u7b7e","flarum-tags.admin.tags.settings_button":"\u8bbe\u5b9a\u8303\u56f4","flarum-tags.lib.deleted_tag_text":"\u5df2\u5220\u9664","flarum-akismet.admin.akismet_settings.api_key_label":"API Key","flarum-akismet.admin.akismet_settings.title":"Akismet \u8bbe\u7f6e","flarum-suspend.admin.permissions.suspend_users_label":"\u51bb\u7ed3\u7528\u6237","flarum-lock.admin.permissions.lock_discussions_label":"\u9501\u5b9a\u8bdd\u9898","flarum-flags.admin.permissions.flag_posts_label":"\u53d1\u8d77\u62a5\u544a","flarum-flags.admin.permissions.view_flags_label":"\u67e5\u770b\u62a5\u544a","flarum-flags.admin.settings.guidelines_url_label":"\u793e\u533a\u89c4\u5219 URL","flarum-flags.admin.settings.title":"\u62a5\u544a\u8bbe\u7f6e","flarum-auth-twitter.admin.twitter_settings.api_key_label":"API Key","flarum-auth-twitter.admin.twitter_settings.api_secret_label":"API Secret","flarum-auth-twitter.admin.twitter_settings.title":"Twitter \u8bbe\u7f6e","flarum-auth-facebook.admin.facebook_settings.app_id_label":"App ID","flarum-auth-facebook.admin.facebook_settings.app_secret_label":"App Secret","flarum-auth-facebook.admin.facebook_settings.title":"Facebook \u8bbe\u7f6e","flarum-sticky.admin.permissions.sticky_discussions_label":"\u7f6e\u9876\u8bdd\u9898","flarum-auth-github.admin.github_settings.client_id_label":"Client ID","flarum-auth-github.admin.github_settings.client_secret_label":"Client Secret","flarum-auth-github.admin.github_settings.title":"GitHub \u8bbe\u7f6e","flarum-pusher.admin.pusher_settings.app_cluster_label":"Cluster","flarum-pusher.admin.pusher_settings.app_id_label":"App ID","flarum-pusher.admin.pusher_settings.app_key_label":"App Key","flarum-pusher.admin.pusher_settings.app_secret_label":"App Secret","flarum-pusher.admin.pusher_settings.title":"Pusher \u8bbe\u7f6e","core.lib.username.deleted_user_text":"[\u5df2\u9500\u6237]","flagrow-upload.admin.permissions.upload_label":"\u4e0a\u4f20\u6587\u4ef6","flagrow-upload.admin.permissions.download_label":"\u4e0b\u8f7d\u6587\u4ef6","flagrow-upload.admin.upload_methods.local":"Local","flagrow-upload.admin.upload_methods.aws-s3":"Amazon S3","flagrow-upload.admin.upload_methods.imgur":"Imgur","flagrow-upload.admin.upload_methods.ovh-svfs":"OVH SVFS","flagrow-upload.admin.labels.preferences.title":"\u901a\u7528\u8bbe\u7f6e","flagrow-upload.admin.labels.preferences.max_file_size":"\u6700\u5927\u6587\u4ef6\u5927\u5c0f\uff08\u5355\u4f4d\uff1aKB\uff09","flagrow-upload.admin.labels.preferences.mime_types":"\u914d\u7f6e\u6587\u4ef6\u7c7b\u578b\u53ca\u4e0a\u4f20\u65b9\u5f0f","flagrow-upload.admin.labels.resize.title":"\u56fe\u7247\u7f29\u653e","flagrow-upload.admin.labels.resize.toggle":"\u56fe\u7247\u7f29\u653e","flagrow-upload.admin.labels.resize.max_width":"\u6700\u5927\u56fe\u7247\u5bbd\u5ea6","flagrow-upload.admin.labels.resize.max_height":"\u6700\u5927\u56fe\u7247\u9ad8\u5ea6","flagrow-upload.admin.labels.watermark.title":"\u56fe\u7247\u6c34\u5370","flagrow-upload.admin.labels.watermark.toggle":"\u56fe\u7247\u6c34\u5370","flagrow-upload.admin.labels.watermark.position":"\u6c34\u5370\u4f4d\u7f6e","flagrow-upload.admin.labels.watermark.file":"\u4e0a\u4f20\u6c34\u5370\u56fe\u7247","flagrow-upload.admin.labels.local.title":"\u672c\u5730\u50a8\u5b58\u8bbe\u7f6e","flagrow-upload.admin.labels.local.cdn_url":"CDN \u94fe\u63a5\uff08\u6587\u4ef6\u7f51\u5740\u524d\u7f00\uff09","flagrow-upload.admin.labels.imgur.title":"Imgur \u56fe\u7247\u8bbe\u7f6e","flagrow-upload.admin.labels.imgur.client_id":"Imgur \u5ba2\u6237\u7aef ID","flagrow-upload.admin.labels.aws-s3.title":"AWS S3 \u50a8\u5b58\u8bbe\u7f6e","flagrow-upload.admin.labels.aws-s3.key":"Key","flagrow-upload.admin.labels.aws-s3.secret":"Secret","flagrow-upload.admin.labels.aws-s3.bucket":"Bucket","flagrow-upload.admin.labels.aws-s3.region":"Region","flagrow-upload.admin.labels.ovh-svfs.title":"OVH SVFS \u50a8\u5b58\u8bbe\u7f6e","flagrow-upload.admin.labels.ovh-svfs.container":"Container","flagrow-upload.admin.labels.ovh-svfs.tenantid":"Tenant ID","flagrow-upload.admin.labels.ovh-svfs.username":"Username","flagrow-upload.admin.labels.ovh-svfs.password":"Password","flagrow-upload.admin.labels.ovh-svfs.region":"Region","flagrow-upload.admin.labels.disable-hotlink-protection.title":"\u505c\u7528\u9632\u76d7\u94fe","flagrow-upload.admin.labels.disable-hotlink-protection.toggle":"\u505c\u7528","flagrow-upload.admin.labels.disable-download-logging.title":"\u505c\u7528\u4e0b\u8f7d\u65e5\u5fd7\u8bb0\u5f55","flagrow-upload.admin.labels.disable-download-logging.toggle":"\u505c\u7528","flagrow-upload.admin.buttons.save":"\u4fdd\u5b58\u8bbe\u7f6e","flagrow-upload.admin.help_texts.description":"\u6587\u4ef6\u4e0a\u4f20\u670d\u52a1\u4e0e\u8bbe\u5b9a\n","flagrow-upload.admin.help_texts.mime_types":"\u914d\u7f6e\u5141\u8bb8\u7684\u4e0a\u4f20\u6587\u4ef6\u7c7b\u578b\u53ca\u65b9\u5f0f\uff0c\u7531\u6b63\u5219\u8868\u8fbe\u5f0f\u5904\u7406\u3002\n","flagrow-upload.admin.help_texts.resize":"\u914d\u7f6e\u6587\u4ef6\u7f29\u653e\u529f\u80fd\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\uff0c\u8d85\u8fc7\u6700\u5927\u5bbd\u5ea6\u53ca\u9ad8\u5ea6\u540e\u4f1a\u88ab\u7f29\u653e\uff0c\u4fdd\u6301\u6a2a\u7eb5\u6bd4\u4e0d\u53d8\u3002\n","flagrow-upload.admin.help_texts.watermark":"\u914d\u7f6e\u4e0a\u4f20\u56fe\u7247\u6c34\u5370\uff0c\u5c06\u4f1a\u6dfb\u52a0\u81f3\u975e GIF \u56fe\u7247\u4e2d\u3002\n","flagrow-upload.admin.help_texts.disable-hotlink-protection":"\u9632\u76d7\u94fe\u5c06\u4fdd\u62a4\u4f60\u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5176\u4ed6\u7ad9\u70b9\u8c03\u7528\u4e0b\u8f7d\uff0c\u9700\u8981 CSRF TOKEN \u548c POST ID\u3002\n","flagrow-upload.admin.help_texts.disable-download-logging":"\u505c\u7528\u4e0b\u8f7d\u65e5\u5fd7\u8bb0\u5f55\u529f\u80fd\u3002\u82e5\u4fdd\u6301\u5f00\u542f\uff0c\u5c06\u53ef\u4ee5\u67e5\u770b\u4e0b\u8f7d\u8bb0\u5f55\u53ca\u5176\u4ed6\u6307\u6807\u3002\n","flarum-best-answer.admin.permissions.best_answer":"\u91c7\u7eb3\u6700\u4f73"};
moment.locale('zh', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  longDateFormat: {
    LT: 'Ah点mm分',
    LTS: 'Ah点m分s秒',
    L: 'YYYY-MM-DD',
    LL: 'YYYY年MMMD日',
    LLL: 'YYYY年MMMD日Ah点mm分',
    LLLL: 'YYYY年MMMD日 ddd H:mm:ss',
    l: 'YYYY-MM-DD',
    ll: 'YYYY年MMMD日',
    lll: 'YYYY年MMMD日Ah点mm分',
    llll: 'YYYY年MMMD日ddddAh点mm分'
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function (hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === '凌晨' || meridiem === '早上' ||
        meridiem === '上午') {
      return hour;
    } else if (meridiem === '下午' || meridiem === '晚上') {
      return hour + 12;
    } else {
      // '中午'
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem: function (hour, minute, isLower) {
    var hm = hour * 100 + minute;
    if (hm < 600) {
      return '凌晨';
    } else if (hm < 900) {
      return '早上';
    } else if (hm < 1130) {
      return '上午';
    } else if (hm < 1230) {
      return '中午';
    } else if (hm < 1800) {
      return '下午';
    } else {
      return '晚上';
    }
  },
  calendar: {
    sameDay: function () {
      return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
    },
    nextDay: function () {
      return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
    },
    lastDay: function () {
      return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
    },
    nextWeek: function () {
      var startOfWeek, prefix;
      startOfWeek = moment().startOf('week');
      prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
      return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
    },
    lastWeek: function () {
      var startOfWeek, prefix;
      startOfWeek = moment().startOf('week');
      prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
      return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
    },
    sameElse: 'LL'
  },
  ordinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function (number, period) {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return number + '日';
      case 'M':
        return number + '月';
      case 'w':
      case 'W':
        return number + '周';
      default:
        return number;
    }
  },
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年'
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
});

            });
        }
    };
});;
