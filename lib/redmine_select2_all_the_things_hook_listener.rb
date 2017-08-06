class RedmineSelect2AllTheThingsHookListener < Redmine::Hook::ViewListener
	render_on :view_layouts_base_html_head, :partial => "redmine_select2_all_the_things/redmine_select2_all_the_things_partial"
end
