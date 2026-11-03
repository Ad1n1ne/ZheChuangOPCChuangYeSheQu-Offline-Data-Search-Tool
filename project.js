/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "A10",
  "slug": "offline-search",
  "name": "离线资料检索工具",
  "desc": "按关键词查询资料原文与出处，导出独立使用的资料查询页。",
  "fields": [
    {
      "key": "title",
      "label": "资料库名称",
      "type": "text",
      "value": "水杯产品资料库"
    },
    {
      "key": "query",
      "label": "当前查询（空格分隔关键词）",
      "type": "text",
      "value": "容量"
    },
    {
      "key": "texts",
      "label": "导入TXT或Markdown资料",
      "type": "upload",
      "value": [],
      "mode": "text"
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "资料条目",
      "columns": [
        {
          "key": "title",
          "label": "标题",
          "type": "text"
        },
        {
          "key": "source",
          "label": "来源",
          "type": "text"
        },
        {
          "key": "body",
          "label": "正文",
          "type": "textarea"
        }
      ],
      "rows": [
        {
          "title": "水杯规格",
          "source": "产品说明第1节",
          "body": "容量350ml，杯身不锈钢，颜色有黑色和白色。"
        },
        {
          "title": "日常清洁",
          "source": "使用指南",
          "body": "建议及时清洗并晾干，请勿放入微波炉。"
        }
      ]
    }
  ],
  "limits": "关键词全部匹配检索，不生成答案。导出的资料页包含所选原文。",
  "dirname": "offline-search",
  "example": {
    "_files": {},
    "title": "水杯产品资料库",
    "query": "容量",
    "items": [
      {
        "title": "水杯规格",
        "source": "产品说明第1节",
        "body": "容量350ml，杯身不锈钢，颜色有黑色和白色。"
      },
      {
        "title": "日常清洁",
        "source": "使用指南",
        "body": "建议及时清洗并晾干，请勿放入微波炉。"
      }
    ]
  },
  "inputTitle": "资料与关键词",
  "outputTitle": "检索结果",
  "action": "搜索资料"
};
