searchNodes=[{"doc":"MsprBillingApi keeps the contexts that define your domain and business logic. Contexts are also responsible for managing your data, regardless if it comes from the database, an external API or others.","ref":"MsprBillingApi.html","title":"MsprBillingApi","type":"module"},{"doc":"Product is a model provide by another API We use it to get VAT types: normal, code: 4 intermediate, code: 3 reduce, code: 2 super reduce, code: 1","ref":"MsprBillingApi.Billing.Product.html","title":"MsprBillingApi.Billing.Product","type":"module"},{"doc":"","ref":"MsprBillingApi.Billing.Product.html#get_vat/0","title":"MsprBillingApi.Billing.Product.get_vat/0","type":"function"},{"doc":"Provides vat-related functions.","ref":"MsprBillingApi.Billing.Vat.html","title":"MsprBillingApi.Billing.Vat","type":"module"},{"doc":"Allow you to initialiaze Mnesia table for VAT Exemples alias MsprBillingApi.Billing.Vat Vat.create_table()","ref":"MsprBillingApi.Billing.Vat.html#create_table/0","title":"MsprBillingApi.Billing.Vat.create_table/0","type":"function"},{"doc":"Allow you to get VAT by type code Exemples iex&gt; alias MsprBillingApi.Billing.Vat iex&gt; type = &quot;normal&quot; iex&gt; Vat.get_vat_by_type(type) [%{percent: 20, type: &quot;normal&quot;}]","ref":"MsprBillingApi.Billing.Vat.html#get_vat_by_type/1","title":"MsprBillingApi.Billing.Vat.get_vat_by_type/1","type":"function"},{"doc":"","ref":"MsprBillingApi.Billing.Vat.html#get_vat_info/0","title":"MsprBillingApi.Billing.Vat.get_vat_info/0","type":"function"},{"doc":"Allow you to get all VATs Exemples iex&gt; alias MsprBillingApi.Billing.Vat iex&gt; Vat.get_vats() [ %{percent: 20, type: &quot;normal&quot;}, %{percent: 10, type: &quot;intermediary&quot;} ]","ref":"MsprBillingApi.Billing.Vat.html#get_vats/0","title":"MsprBillingApi.Billing.Vat.get_vats/0","type":"function"},{"doc":"Allow you to create VAT in Mnesia database Exemples alias MsprBillingApi.Billing.Vat Vat.insert_vat()","ref":"MsprBillingApi.Billing.Vat.html#insert_vat/0","title":"MsprBillingApi.Billing.Vat.insert_vat/0","type":"function"},{"doc":"The entrypoint for defining your web interface, such as controllers, views, channels and so on. This can be used in your application as: use MsprBillingApiWeb, :controller use MsprBillingApiWeb, :view The definitions below will be executed for every view, controller, etc, so keep them short and clean, focused on imports, uses and aliases. Do NOT define functions inside the quoted expressions below. Instead, define any helper function in modules and import those modules here.","ref":"MsprBillingApiWeb.html","title":"MsprBillingApiWeb","type":"module"},{"doc":"When used, dispatch to the appropriate controller/view/etc.","ref":"MsprBillingApiWeb.html#__using__/1","title":"MsprBillingApiWeb.__using__/1","type":"macro"},{"doc":"","ref":"MsprBillingApiWeb.html#channel/0","title":"MsprBillingApiWeb.channel/0","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.html#controller/0","title":"MsprBillingApiWeb.controller/0","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.html#router/0","title":"MsprBillingApiWeb.router/0","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.html#view/0","title":"MsprBillingApiWeb.view/0","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Endpoint.html","title":"MsprBillingApiWeb.Endpoint","type":"module"},{"doc":"Callback implementation for Phoenix.Endpoint.broadcast/3.","ref":"MsprBillingApiWeb.Endpoint.html#broadcast/3","title":"MsprBillingApiWeb.Endpoint.broadcast/3","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.broadcast!/3.","ref":"MsprBillingApiWeb.Endpoint.html#broadcast!/3","title":"MsprBillingApiWeb.Endpoint.broadcast!/3","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.broadcast_from/4.","ref":"MsprBillingApiWeb.Endpoint.html#broadcast_from/4","title":"MsprBillingApiWeb.Endpoint.broadcast_from/4","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.broadcast_from!/4.","ref":"MsprBillingApiWeb.Endpoint.html#broadcast_from!/4","title":"MsprBillingApiWeb.Endpoint.broadcast_from!/4","type":"function"},{"doc":"Callback implementation for Plug.call/2.","ref":"MsprBillingApiWeb.Endpoint.html#call/2","title":"MsprBillingApiWeb.Endpoint.call/2","type":"function"},{"doc":"Returns the child specification to start the endpoint under a supervision tree.","ref":"MsprBillingApiWeb.Endpoint.html#child_spec/1","title":"MsprBillingApiWeb.Endpoint.child_spec/1","type":"function"},{"doc":"Returns the endpoint configuration for key Returns default if the key does not exist.","ref":"MsprBillingApiWeb.Endpoint.html#config/2","title":"MsprBillingApiWeb.Endpoint.config/2","type":"function"},{"doc":"Reloads the configuration given the application environment changes.","ref":"MsprBillingApiWeb.Endpoint.html#config_change/2","title":"MsprBillingApiWeb.Endpoint.config_change/2","type":"function"},{"doc":"Returns the host for the given endpoint.","ref":"MsprBillingApiWeb.Endpoint.html#host/0","title":"MsprBillingApiWeb.Endpoint.host/0","type":"function"},{"doc":"Callback implementation for Plug.init/1.","ref":"MsprBillingApiWeb.Endpoint.html#init/1","title":"MsprBillingApiWeb.Endpoint.init/1","type":"function"},{"doc":"Instruments the given function. event is the event identifier (usually an atom) that specifies which instrumenting function to call in the instrumenter modules. runtime is metadata to be associated with the event at runtime (e.g., the query being issued if the event to instrument is a DB query). Examples instrument :render_view, %{view: &quot;index.html&quot;}, fn -&gt; render(conn, &quot;index.html&quot;) end","ref":"MsprBillingApiWeb.Endpoint.html#instrument/3","title":"MsprBillingApiWeb.Endpoint.instrument/3","type":"macro"},{"doc":"Generates the path information when routing to this endpoint.","ref":"MsprBillingApiWeb.Endpoint.html#path/1","title":"MsprBillingApiWeb.Endpoint.path/1","type":"function"},{"doc":"Generates the script name.","ref":"MsprBillingApiWeb.Endpoint.html#script_name/0","title":"MsprBillingApiWeb.Endpoint.script_name/0","type":"function"},{"doc":"Starts the endpoint supervision tree.","ref":"MsprBillingApiWeb.Endpoint.html#start_link/1","title":"MsprBillingApiWeb.Endpoint.start_link/1","type":"function"},{"doc":"Generates a base64-encoded cryptographic hash (sha512) to a static file in priv/static. Meant to be used for Subresource Integrity with CDNs.","ref":"MsprBillingApiWeb.Endpoint.html#static_integrity/1","title":"MsprBillingApiWeb.Endpoint.static_integrity/1","type":"function"},{"doc":"Returns a two item tuple with the first item being the static_path and the second item being the static_integrity.","ref":"MsprBillingApiWeb.Endpoint.html#static_lookup/1","title":"MsprBillingApiWeb.Endpoint.static_lookup/1","type":"function"},{"doc":"Generates a route to a static file in priv/static.","ref":"MsprBillingApiWeb.Endpoint.html#static_path/1","title":"MsprBillingApiWeb.Endpoint.static_path/1","type":"function"},{"doc":"Generates the static URL without any path information. It uses the configuration under :static_url to generate such. It falls back to :url if :static_url is not set.","ref":"MsprBillingApiWeb.Endpoint.html#static_url/0","title":"MsprBillingApiWeb.Endpoint.static_url/0","type":"function"},{"doc":"Generates the endpoint base URL but as a URI struct. It uses the configuration under :url to generate such. Useful for manipulating the URL data and passing it to URL helpers.","ref":"MsprBillingApiWeb.Endpoint.html#struct_url/0","title":"MsprBillingApiWeb.Endpoint.struct_url/0","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Endpoint.html#subscribe/1","title":"MsprBillingApiWeb.Endpoint.subscribe/1","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Endpoint.html#subscribe/3","title":"MsprBillingApiWeb.Endpoint.subscribe/3","type":"function"},{"doc":"Callback implementation for Phoenix.Endpoint.unsubscribe/1.","ref":"MsprBillingApiWeb.Endpoint.html#unsubscribe/1","title":"MsprBillingApiWeb.Endpoint.unsubscribe/1","type":"function"},{"doc":"Generates the endpoint base URL without any path information. It uses the configuration under :url to generate such.","ref":"MsprBillingApiWeb.Endpoint.html#url/0","title":"MsprBillingApiWeb.Endpoint.url/0","type":"function"},{"doc":"Conveniences for translating and building error messages.","ref":"MsprBillingApiWeb.ErrorHelpers.html","title":"MsprBillingApiWeb.ErrorHelpers","type":"module"},{"doc":"Translates an error message using gettext.","ref":"MsprBillingApiWeb.ErrorHelpers.html#translate_error/1","title":"MsprBillingApiWeb.ErrorHelpers.translate_error/1","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.ErrorView.html","title":"MsprBillingApiWeb.ErrorView","type":"module"},{"doc":"Returns true whenever the list of templates changes in the filesystem.","ref":"MsprBillingApiWeb.ErrorView.html#__phoenix_recompile__?/0","title":"MsprBillingApiWeb.ErrorView.__phoenix_recompile__?/0","type":"function"},{"doc":"The resource name, as an atom, for this view","ref":"MsprBillingApiWeb.ErrorView.html#__resource__/0","title":"MsprBillingApiWeb.ErrorView.__resource__/0","type":"function"},{"doc":"Returns the template root alongside all templates.","ref":"MsprBillingApiWeb.ErrorView.html#__templates__/0","title":"MsprBillingApiWeb.ErrorView.__templates__/0","type":"function"},{"doc":"Renders the given template locally.","ref":"MsprBillingApiWeb.ErrorView.html#render/2","title":"MsprBillingApiWeb.ErrorView.render/2","type":"function"},{"doc":"Callback invoked when no template is found. By default it raises but can be customized to render a particular template.","ref":"MsprBillingApiWeb.ErrorView.html#template_not_found/2","title":"MsprBillingApiWeb.ErrorView.template_not_found/2","type":"function"},{"doc":"A module providing Internationalization with a gettext-based API. By using Gettext, your module gains a set of macros for translations, for example: import MsprBillingApiWeb.Gettext # Simple translation gettext(&quot;Here is the string to translate&quot;) # Plural translation ngettext(&quot;Here is the string to translate&quot;, &quot;Here are the strings to translate&quot;, 3) # Domain-based translation dgettext(&quot;errors&quot;, &quot;Here is the error message to translate&quot;) See the Gettext Docs for detailed usage.","ref":"MsprBillingApiWeb.Gettext.html","title":"MsprBillingApiWeb.Gettext","type":"module"},{"doc":"Callback implementation for Gettext.Backend.dgettext/3.","ref":"MsprBillingApiWeb.Gettext.html#dgettext/3","title":"MsprBillingApiWeb.Gettext.dgettext/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dgettext_noop/2.","ref":"MsprBillingApiWeb.Gettext.html#dgettext_noop/2","title":"MsprBillingApiWeb.Gettext.dgettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dngettext/5.","ref":"MsprBillingApiWeb.Gettext.html#dngettext/5","title":"MsprBillingApiWeb.Gettext.dngettext/5","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dngettext_noop/3.","ref":"MsprBillingApiWeb.Gettext.html#dngettext_noop/3","title":"MsprBillingApiWeb.Gettext.dngettext_noop/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dpgettext/4.","ref":"MsprBillingApiWeb.Gettext.html#dpgettext/4","title":"MsprBillingApiWeb.Gettext.dpgettext/4","type":"macro"},{"doc":"","ref":"MsprBillingApiWeb.Gettext.html#dpgettext_noop/3","title":"MsprBillingApiWeb.Gettext.dpgettext_noop/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dpngettext/6.","ref":"MsprBillingApiWeb.Gettext.html#dpngettext/6","title":"MsprBillingApiWeb.Gettext.dpngettext/6","type":"macro"},{"doc":"","ref":"MsprBillingApiWeb.Gettext.html#dpngettext_noop/4","title":"MsprBillingApiWeb.Gettext.dpngettext_noop/4","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext/2.","ref":"MsprBillingApiWeb.Gettext.html#gettext/2","title":"MsprBillingApiWeb.Gettext.gettext/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext_comment/1.","ref":"MsprBillingApiWeb.Gettext.html#gettext_comment/1","title":"MsprBillingApiWeb.Gettext.gettext_comment/1","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext_noop/1.","ref":"MsprBillingApiWeb.Gettext.html#gettext_noop/1","title":"MsprBillingApiWeb.Gettext.gettext_noop/1","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_bindings/2.","ref":"MsprBillingApiWeb.Gettext.html#handle_missing_bindings/2","title":"MsprBillingApiWeb.Gettext.handle_missing_bindings/2","type":"function"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_plural_translation/6.","ref":"MsprBillingApiWeb.Gettext.html#handle_missing_plural_translation/6","title":"MsprBillingApiWeb.Gettext.handle_missing_plural_translation/6","type":"function"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_translation/4.","ref":"MsprBillingApiWeb.Gettext.html#handle_missing_translation/4","title":"MsprBillingApiWeb.Gettext.handle_missing_translation/4","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Gettext.html#lgettext/5","title":"MsprBillingApiWeb.Gettext.lgettext/5","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Gettext.html#lngettext/7","title":"MsprBillingApiWeb.Gettext.lngettext/7","type":"function"},{"doc":"Callback implementation for Gettext.Backend.ngettext/4.","ref":"MsprBillingApiWeb.Gettext.html#ngettext/4","title":"MsprBillingApiWeb.Gettext.ngettext/4","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.ngettext_noop/2.","ref":"MsprBillingApiWeb.Gettext.html#ngettext_noop/2","title":"MsprBillingApiWeb.Gettext.ngettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.pgettext/3.","ref":"MsprBillingApiWeb.Gettext.html#pgettext/3","title":"MsprBillingApiWeb.Gettext.pgettext/3","type":"macro"},{"doc":"","ref":"MsprBillingApiWeb.Gettext.html#pgettext_noop/2","title":"MsprBillingApiWeb.Gettext.pgettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.pngettext/5.","ref":"MsprBillingApiWeb.Gettext.html#pngettext/5","title":"MsprBillingApiWeb.Gettext.pngettext/5","type":"macro"},{"doc":"","ref":"MsprBillingApiWeb.Gettext.html#pngettext_noop/3","title":"MsprBillingApiWeb.Gettext.pngettext_noop/3","type":"macro"},{"doc":"Provides json-related functions.","ref":"MsprBillingApiWeb.JsonHelpers.html","title":"MsprBillingApiWeb.JsonHelpers","type":"module"},{"doc":"Allow you to render json data Parameters conn: Plug.Conn that represents the connection to anwser the client. status: Integer that represents the HTTP status code return to the client. data: Map return to the client Exemples alias MsprBillingApiWeb.JsonHelpers def show(conn) do JsonHelpers.pretty_json(conn, 200, %{msg: &quot;ok&quot;}) end","ref":"MsprBillingApiWeb.JsonHelpers.html#pretty_json/3","title":"MsprBillingApiWeb.JsonHelpers.pretty_json/3","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Router.html","title":"MsprBillingApiWeb.Router","type":"module"},{"doc":"","ref":"MsprBillingApiWeb.Router.html#api/2","title":"MsprBillingApiWeb.Router.api/2","type":"function"},{"doc":"Callback invoked by Plug on every request.","ref":"MsprBillingApiWeb.Router.html#call/2","title":"MsprBillingApiWeb.Router.call/2","type":"function"},{"doc":"Callback required by Plug that initializes the router for serving web requests.","ref":"MsprBillingApiWeb.Router.html#init/1","title":"MsprBillingApiWeb.Router.init/1","type":"function"},{"doc":"Module with named helpers generated from MsprBillingApiWeb.Router.","ref":"MsprBillingApiWeb.Router.Helpers.html","title":"MsprBillingApiWeb.Router.Helpers","type":"module"},{"doc":"Generates the path information including any necessary prefix.","ref":"MsprBillingApiWeb.Router.Helpers.html#path/2","title":"MsprBillingApiWeb.Router.Helpers.path/2","type":"function"},{"doc":"Generates an integrity hash to a static asset given its file path.","ref":"MsprBillingApiWeb.Router.Helpers.html#static_integrity/2","title":"MsprBillingApiWeb.Router.Helpers.static_integrity/2","type":"function"},{"doc":"Generates path to a static asset given its file path.","ref":"MsprBillingApiWeb.Router.Helpers.html#static_path/2","title":"MsprBillingApiWeb.Router.Helpers.static_path/2","type":"function"},{"doc":"Generates url to a static asset given its file path.","ref":"MsprBillingApiWeb.Router.Helpers.html#static_url/2","title":"MsprBillingApiWeb.Router.Helpers.static_url/2","type":"function"},{"doc":"Generates the connection/endpoint base URL without any path information.","ref":"MsprBillingApiWeb.Router.Helpers.html#url/1","title":"MsprBillingApiWeb.Router.Helpers.url/1","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Router.Helpers.html#vat_path/2","title":"MsprBillingApiWeb.Router.Helpers.vat_path/2","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Router.Helpers.html#vat_path/3","title":"MsprBillingApiWeb.Router.Helpers.vat_path/3","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Router.Helpers.html#vat_path/4","title":"MsprBillingApiWeb.Router.Helpers.vat_path/4","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Router.Helpers.html#vat_url/2","title":"MsprBillingApiWeb.Router.Helpers.vat_url/2","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Router.Helpers.html#vat_url/3","title":"MsprBillingApiWeb.Router.Helpers.vat_url/3","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.Router.Helpers.html#vat_url/4","title":"MsprBillingApiWeb.Router.Helpers.vat_url/4","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.UserSocket.html","title":"MsprBillingApiWeb.UserSocket","type":"module"},{"doc":"Callback implementation for Phoenix.Socket.connect/3.","ref":"MsprBillingApiWeb.UserSocket.html#connect/3","title":"MsprBillingApiWeb.UserSocket.connect/3","type":"function"},{"doc":"Callback implementation for Phoenix.Socket.id/1.","ref":"MsprBillingApiWeb.UserSocket.html#id/1","title":"MsprBillingApiWeb.UserSocket.id/1","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.VatController.html","title":"MsprBillingApiWeb.VatController","type":"module"},{"doc":"","ref":"MsprBillingApiWeb.VatController.html#show/2","title":"MsprBillingApiWeb.VatController.show/2","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.VatController.html#show_vat/2","title":"MsprBillingApiWeb.VatController.show_vat/2","type":"function"},{"doc":"","ref":"MsprBillingApiWeb.VatController.html#show_vats/2","title":"MsprBillingApiWeb.VatController.show_vats/2","type":"function"}]