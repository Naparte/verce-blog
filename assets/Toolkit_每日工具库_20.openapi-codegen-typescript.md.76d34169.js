import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.8048b864.js";const l="/assets/openapi-codegen.7bf2b8ca.gif",o="/assets/openapi-codegen-type.60057624.png",A=JSON.parse('{"title":"openapi-codegen/typescript","description":"","frontmatter":{},"headers":[],"relativePath":"Toolkit/每日工具库/20.openapi-codegen-typescript.md","filePath":"Toolkit/每日工具库/20.openapi-codegen-typescript.md"}'),e={name:"Toolkit/每日工具库/20.openapi-codegen-typescript.md"},c=p('<h1 id="openapi-codegen-typescript" tabindex="-1">openapi-codegen/typescript <a class="header-anchor" href="#openapi-codegen-typescript" aria-label="Permalink to &quot;openapi-codegen/typescript&quot;">​</a></h1><h2 id="openapi-codegen-typescript-是什么" tabindex="-1">openapi-codegen/typescript 是什么？ <a class="header-anchor" href="#openapi-codegen-typescript-是什么" aria-label="Permalink to &quot;openapi-codegen/typescript 是什么？&quot;">​</a></h2><ul><li>typescript 生成工具集合</li></ul><h2 id="openapi-codegen-typescript-解决了什么问题" tabindex="-1">openapi-codegen/typescript 解决了什么问题 <a class="header-anchor" href="#openapi-codegen-typescript-解决了什么问题" aria-label="Permalink to &quot;openapi-codegen/typescript 解决了什么问题&quot;">​</a></h2><ul><li><p><code>自动化代码生成</code>：为开发者提供了根据 OpenAPI 规范（Swagger）自动生成 TypeScript 类型安全的客户端或服务器端代码的能力，从而显著减少了手动编写与 API 相关接口、模型和请求处理逻辑的工作量</p></li><li><p><code>保持同步</code>：当 API 发生变化时，更新对应的 TypeScript 定义可以确保客户端或服务端代码始终反映最新的接口规范，减少因为文档与实现不同步而产生的问题</p></li></ul><h2 id="openapi-codegen-typescript-的功能和特点" tabindex="-1">openapi-codegen/typescript 的功能和特点 <a class="header-anchor" href="#openapi-codegen-typescript-的功能和特点" aria-label="Permalink to &quot;openapi-codegen/typescript 的功能和特点&quot;">​</a></h2><h2 id="示例" tabindex="-1">示例： <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例：&quot;">​</a></h2><p><img src="'+l+'" alt="openapi-codegen/typescript demos"></p><h3 id="生成的-type-类型" tabindex="-1">生成的 type 类型 <a class="header-anchor" href="#生成的-type-类型" aria-label="Permalink to &quot;生成的 type 类型&quot;">​</a></h3><p><img src="'+o+`" alt="openapi-codegen-type"></p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">openapi</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3.0.0</span></span>
<span class="line"><span style="color:#85E89D;">info</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.0.0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">API validation using OpenAPI</span></span>
<span class="line"><span style="color:#85E89D;">paths</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">/contact</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">get</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get all the contacts</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get all the contacts</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contacts fetched successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">array</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">items</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/Contact&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in fetching contacts</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">post</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Save a new contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Save a new contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">requestBody</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/requestBodies/Contact&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contact saved successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in saving contact</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;/contact/{id}&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">get</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get a contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get a contact with the id specified in parameter</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">parameters</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">in</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">id</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contact id that needs to be fetched</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contact fetched successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/Contact&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in fetching contact</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">put</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Update a contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Update a contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">parameters</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">in</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">id</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contact id that needs to be updated</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">requestBody</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/requestBodies/Contact&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contact updated successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in updating contact</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">delete</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Delete a contact</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Delete a contact with the id specified in parameter</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">parameters</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">in</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">id</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contact id that needs to be deleted</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contact deleted successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in deleting contact</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">/product</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">get</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get all the products</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get all the products</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Products fetched successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">array</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">items</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/Product&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in fetching products</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">post</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Save a new product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Save a new product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">requestBody</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/requestBodies/Product&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Product saved successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in saving product</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;/product/{id}&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">get</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get a product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get a product with the id specified in parameter</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">parameters</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">in</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">id</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Product id that needs to be fetched</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Product fetched successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/Product&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in fetching product</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">put</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Update a product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Update a product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">parameters</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">in</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">id</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Product id that needs to be updated</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">requestBody</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/requestBodies/Product&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Product updated successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in updating product</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">delete</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">Product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Delete a product</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Delete a product with the id specified in parameter</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">parameters</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">in</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">id</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Product id that needs to be deleted</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">responses</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;200&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Product deleted successfully</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;400&quot;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Error in deleting product</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#85E89D;">servers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">http://localhost:3000/api</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://localhost:3000/api</span></span>
<span class="line"><span style="color:#85E89D;">components</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">requestBodies</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">Contact</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/Contact&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Contact object</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">Product</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">application/json</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">schema</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">$ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/components/schemas/Product&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Product object</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">schemas</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">CommonResponse</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">object</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">properties</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">message</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">Contact</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">object</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">properties</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">mobile</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">email</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">Product</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">object</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">properties</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">price</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">number</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">openapi</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3.0.0</span></span>
<span class="line"><span style="color:#22863A;">info</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1.0.0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">API validation using OpenAPI</span></span>
<span class="line"><span style="color:#22863A;">paths</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">/contact</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">get</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get all the contacts</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get all the contacts</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contacts fetched successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">array</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">items</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/Contact&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in fetching contacts</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">post</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Save a new contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Save a new contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">requestBody</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/requestBodies/Contact&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contact saved successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in saving contact</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;/contact/{id}&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">get</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get a contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get a contact with the id specified in parameter</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">parameters</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">in</span><span style="color:#24292E;">: </span><span style="color:#032F62;">path</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">id</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contact id that needs to be fetched</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contact fetched successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/Contact&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in fetching contact</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">put</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Update a contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Update a contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">parameters</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">in</span><span style="color:#24292E;">: </span><span style="color:#032F62;">path</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">id</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contact id that needs to be updated</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">requestBody</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/requestBodies/Contact&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contact updated successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in updating contact</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">delete</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Delete a contact</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Delete a contact with the id specified in parameter</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">parameters</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">in</span><span style="color:#24292E;">: </span><span style="color:#032F62;">path</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">id</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contact id that needs to be deleted</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contact deleted successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in deleting contact</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">/product</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">get</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get all the products</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get all the products</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Products fetched successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">array</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">items</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/Product&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in fetching products</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">post</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Save a new product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Save a new product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">requestBody</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/requestBodies/Product&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Product saved successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in saving product</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;/product/{id}&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">get</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get a product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get a product with the id specified in parameter</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">parameters</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">in</span><span style="color:#24292E;">: </span><span style="color:#032F62;">path</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">id</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Product id that needs to be fetched</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Product fetched successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/Product&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in fetching product</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">put</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Update a product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Update a product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">parameters</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">in</span><span style="color:#24292E;">: </span><span style="color:#032F62;">path</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">id</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Product id that needs to be updated</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">requestBody</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/requestBodies/Product&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Product updated successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in updating product</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">delete</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">Product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">summary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Delete a product</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Delete a product with the id specified in parameter</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">parameters</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">in</span><span style="color:#24292E;">: </span><span style="color:#032F62;">path</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">id</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Product id that needs to be deleted</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">responses</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;200&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Product deleted successfully</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;400&quot;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Error in deleting product</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/CommonResponse&quot;</span></span>
<span class="line"><span style="color:#22863A;">servers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">http://localhost:3000/api</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://localhost:3000/api</span></span>
<span class="line"><span style="color:#22863A;">components</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">requestBodies</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">Contact</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/Contact&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Contact object</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">Product</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">content</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">application/json</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">schema</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">$ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/components/schemas/Product&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Product object</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">schemas</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">CommonResponse</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">object</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">properties</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">message</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">Contact</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">object</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">properties</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">id</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">name</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">mobile</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">email</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">Product</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">object</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">properties</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">id</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">name</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">price</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">number</span></span></code></pre></div><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://github.com/fabien0102/openapi-codegen" target="_blank" rel="noreferrer">https://github.com/fabien0102/openapi-codegen</a></li></ul>`,13),t=[c];function E(r,y,i,F,u,d){return n(),a("div",null,t)}const D=s(e,[["render",E]]);export{A as __pageData,D as default};
